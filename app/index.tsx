import { useEffect, useRef, useState } from 'react';
import { ErrorCode, isUserCancelledError, useIAP } from 'expo-iap';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  ActivityIndicator,
  Alert,
  Animated,
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FavoritesModal from '@/components/FavoritesModal';
import FavoritesPurchaseModal from '@/components/FavoritesPurchaseModal';
import InfoModal from '@/components/InfoModal';
import { locale, t } from '@/i18n';
import { getCurrentLocation } from '@/services/location-service';
import { getSavedLocation, saveLocation } from '@/services/location-storage';
import { openSavedLocationInMaps } from '@/services/map-navigation';
import {
  cacheFavoritesEntitlement,
  FAVORITES_PRODUCT_ID,
  getCachedFavoritesEntitlement,
} from '@/services/purchase-storage';
import type { SavedLocation } from '@/types/saved-location';

const TOAST_DURATION_MS = 2500;

function formatSavedAt(savedAt: string): string {
  const date = new Date(savedAt);

  if (Number.isNaN(date.getTime())) {
    return t('unknownTime');
  }

  const today = new Date();
  const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  const time = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);

  if (isToday) {
    return t('todayAt', { time });
  }

  return new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const topButtonOffset = Math.max(insets.top + 10, 30);
  const [savedLocation, setSavedLocation] = useState<SavedLocation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [hasFavorites, setHasFavorites] = useState(false);
  const [isPurchaseVisible, setIsPurchaseVisible] = useState(false);
  const [isFavoritesVisible, setIsFavoritesVisible] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const ownershipCheckRequested = useRef(false);
  const restoreRequested = useRef(false);
  const toastOpacity = useRef(new Animated.Value(0)).current;
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    connected,
    products,
    availablePurchases,
    fetchProducts,
    getAvailablePurchases,
    requestPurchase,
    finishTransaction,
    restorePurchases,
  } = useIAP({
    onPurchaseSuccess: (purchase) => {
      if (purchase.productId !== FAVORITES_PRODUCT_ID) return;
      void (async () => {
        try {
          await finishTransaction({ purchase, isConsumable: false });
          await cacheFavoritesEntitlement(true);
          setHasFavorites(true);
          setIsPurchasing(false);
          setIsPurchaseVisible(false);
          setIsFavoritesVisible(true);
        } catch {
          setIsPurchasing(false);
          Alert.alert(t('purchaseErrorTitle'), t('purchaseErrorMessage'));
        }
      })();
    },
    onPurchaseError: (error) => {
      setIsPurchasing(false);
      if (error.code !== ErrorCode.UserCancelled) {
        Alert.alert(t('purchaseErrorTitle'), t('purchaseErrorMessage'));
      }
    },
  });

  const favoritesProduct = products.find((product) => product.id === FAVORITES_PRODUCT_ID);

  useEffect(() => {
    async function loadSavedLocation() {
      try {
        const [location, entitlement] = await Promise.all([
          getSavedLocation(),
          getCachedFavoritesEntitlement(),
        ]);
        setSavedLocation(location);
        setHasFavorites(entitlement);
      } catch {
        Alert.alert(t('loadErrorTitle'), t('loadErrorMessage'));
      } finally {
        setIsLoading(false);
      }
    }

    void loadSavedLocation();
  }, []);

  useEffect(() => {
    if (!connected) return;
    ownershipCheckRequested.current = true;
    void Promise.all([
      fetchProducts({ skus: [FAVORITES_PRODUCT_ID], type: 'in-app' }),
      getAvailablePurchases(),
    ]).catch(() => {
      ownershipCheckRequested.current = false;
    });
  }, [connected, fetchProducts, getAvailablePurchases]);

  useEffect(() => {
    if (!ownershipCheckRequested.current) return;
    const owned = availablePurchases.some((purchase) => purchase.productId === FAVORITES_PRODUCT_ID);
    void cacheFavoritesEntitlement(owned);
    setHasFavorites(owned);
    ownershipCheckRequested.current = false;

    if (restoreRequested.current) {
      restoreRequested.current = false;
      setIsRestoring(false);
      Alert.alert(
        owned ? t('restoreSuccessTitle') : t('restoreNotFoundTitle'),
        owned ? t('restoreSuccessMessage') : t('restoreNotFoundMessage'),
      );
      if (owned) setIsPurchaseVisible(false);
    }
  }, [availablePurchases]);

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);

  function showSavedToast() {
    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    setIsToastVisible(true);
    toastOpacity.setValue(0);

    Animated.timing(toastOpacity, {
      toValue: 1,
      duration: 180,
      useNativeDriver: true,
    }).start();

    toastTimer.current = setTimeout(() => {
      Animated.timing(toastOpacity, {
        toValue: 0,
        duration: 180,
        useNativeDriver: true,
      }).start(({ finished }) => {
        if (finished) {
          setIsToastVisible(false);
        }
      });
    }, TOAST_DURATION_MS);
  }

  async function handleSaveLocation() {
    if (isSaving) {
      return;
    }

    setIsSaving(true);

    try {
      const result = await getCurrentLocation();

      if (!result.success) {
        if (result.reason === 'permission-denied') {
          Alert.alert(t('permissionTitle'), t('permissionMessage'), [
            { text: t('cancel'), style: 'cancel' },
            {
              text: t('openSettings'),
              onPress: () => {
                void Linking.openSettings();
              },
            },
          ]);
          return;
        }

        Alert.alert(t('locationErrorTitle'), t('locationErrorMessage'));
        return;
      }

      await saveLocation(result.location);
      setSavedLocation(result.location);
      showSavedToast();
    } catch {
      Alert.alert(t('saveErrorTitle'), t('saveErrorMessage'));
    } finally {
      setIsSaving(false);
    }
  }

  async function handleOpenMap() {
    if (!savedLocation) {
      return;
    }

    try {
      await openSavedLocationInMaps(savedLocation);
    } catch {
      Alert.alert(t('mapErrorTitle'), t('mapErrorMessage'));
    }
  }

  function handleFavoritesPress() {
    if (hasFavorites) setIsFavoritesVisible(true);
    else setIsPurchaseVisible(true);
  }

  async function handlePurchase() {
    if (!connected || !favoritesProduct || isPurchasing) return;
    setIsPurchasing(true);
    try {
      await requestPurchase({
        request: {
          apple: { sku: FAVORITES_PRODUCT_ID },
          google: { skus: [FAVORITES_PRODUCT_ID] },
        },
        type: 'in-app',
      });
    } catch (error) {
      setIsPurchasing(false);
      if (!isUserCancelledError(error)) {
        Alert.alert(t('purchaseErrorTitle'), t('purchaseErrorMessage'));
      }
    }
  }

  async function handleRestore() {
    if (!connected || isRestoring) return;
    setIsRestoring(true);
    restoreRequested.current = true;
    ownershipCheckRequested.current = true;
    try {
      await restorePurchases();
    } catch {
      restoreRequested.current = false;
      ownershipCheckRequested.current = false;
      setIsRestoring(false);
      Alert.alert(t('purchaseErrorTitle'), t('purchaseErrorMessage'));
    }
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('infoAccessibilityLabel')}
          hitSlop={12}
          style={({ pressed }) => [
            styles.infoButton,
            { top: topButtonOffset },
            pressed && styles.infoButtonPressed,
          ]}
          onPress={() => setIsInfoVisible(true)}
        >
          <Text style={styles.infoButtonText}>i</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={t('favoritesAccessibilityLabel')}
          hitSlop={10}
          style={({ pressed }) => [
            styles.favoritesButton,
            { top: topButtonOffset + 52 },
            pressed && styles.infoButtonPressed,
          ]}
          onPress={handleFavoritesPress}
        >
          <Text style={styles.favoritesButtonText}>{hasFavorites ? '★' : '☆'}</Text>
        </Pressable>

        <View style={styles.pinArea}>
          <Image
            source={require('@/assets/images/findback-pin.png')}
            style={styles.pinImage}
            resizeMode="contain"
            accessibilityLabel={t('pinAccessibilityLabel')}
          />
        </View>

        <View style={styles.content}>
          {isToastVisible ? (
            <Animated.View pointerEvents="none" style={[styles.toast, { opacity: toastOpacity }]}>
              <Image
                source={require('@/assets/images/findback-pin.png')}
                style={styles.toastIcon}
                resizeMode="contain"
                accessibilityIgnoresInvertColors
              />
              <Text style={styles.toastText}>{t('positionSaved')}</Text>
            </Animated.View>
          ) : null}

          <Pressable
            accessibilityRole="button"
            accessibilityLabel={t('savePosition')}
            disabled={isSaving}
            style={({ pressed }) => [
              styles.saveButton,
              pressed && styles.buttonPressed,
              isSaving && styles.buttonDisabled,
            ]}
            onPress={() => void handleSaveLocation()}
          >
            {isSaving ? (
              <View style={styles.buttonLoadingContent}>
                <ActivityIndicator color="#0D3B84" />
                <Text style={styles.saveButtonTitle}>{t('gettingPosition')}</Text>
              </View>
            ) : (
              <>
                <Text style={styles.saveButtonTitle}>{t('savePosition')}</Text>
                {savedLocation ? (
                  <Text style={styles.saveButtonSubtitle}>{t('overwritePrevious')}</Text>
                ) : null}
              </>
            )}
          </Pressable>

          {savedLocation ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={t('findAgain')}
              style={({ pressed }) => [styles.findButton, pressed && styles.buttonPressed]}
              onPress={() => void handleOpenMap()}
            >
              <Text style={styles.findButtonTitle}>{t('findAgain')}</Text>
            </Pressable>
          ) : null}

          {savedLocation ? (
            <View style={styles.savedStatus}>
              <Text style={styles.savedStatusLabel}>{t('lastSaved')}</Text>
              <Text style={styles.savedStatusValue}>{formatSavedAt(savedLocation.savedAt)}</Text>
            </View>
          ) : null}
        </View>

        <Text style={styles.footer}>© Morning Coffee Labs</Text>
      </View>

      <InfoModal visible={isInfoVisible} onClose={() => setIsInfoVisible(false)} />
      <FavoritesPurchaseModal
        visible={isPurchaseVisible}
        displayPrice={favoritesProduct?.displayPrice}
        isConnected={connected}
        isPurchasing={isPurchasing}
        isRestoring={isRestoring}
        onPurchase={() => void handlePurchase()}
        onRestore={() => void handleRestore()}
        onClose={() => setIsPurchaseVisible(false)}
      />
      <FavoritesModal visible={isFavoritesVisible} lastSaved={savedLocation} onClose={() => setIsFavoritesVisible(false)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0866E8' },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 28,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0866E8',
  },
  infoButton: {
    position: 'absolute',
    right: 22,
    zIndex: 20,
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 21,
    backgroundColor: 'rgba(8, 46, 104, 0.28)',
  },
  infoButtonPressed: { opacity: 0.7, transform: [{ scale: 0.96 }] },
  infoButtonText: {
    color: '#FFFFFF',
    fontSize: 26,
    lineHeight: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  favoritesButton: {
    position: 'absolute',
    right: 22,
    zIndex: 20,
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 21,
    backgroundColor: 'rgba(8, 46, 104, 0.28)',
  },
  favoritesButtonText: { color: '#FFFFFF', fontSize: 29, lineHeight: 33, textAlign: 'center' },
  pinArea: { flex: 1, alignItems: 'center', justifyContent: 'center', minHeight: 250 },
  pinImage: { width: '84%', maxWidth: 390, height: 360 },
  content: { gap: 14 },
  toast: {
    alignSelf: 'center',
    minHeight: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    borderRadius: 20,
    backgroundColor: '#082E68',
    paddingHorizontal: 24,
    paddingVertical: 12,
    shadowColor: '#001F4E',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 12,
    elevation: 8,
  },
  toastIcon: { width: 34, height: 42 },
  toastText: { color: '#FFFFFF', fontSize: 21, fontWeight: '700', textAlign: 'center' },
  saveButton: {
    minHeight: 92,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    shadowColor: '#001F4E',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 12,
    elevation: 8,
  },
  findButton: {
    minHeight: 82,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    backgroundColor: '#082E68',
    paddingHorizontal: 20,
    paddingVertical: 16,
    shadowColor: '#001F4E',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 7,
  },
  buttonPressed: { opacity: 0.84, transform: [{ scale: 0.99 }] },
  buttonDisabled: { opacity: 0.68 },
  buttonLoadingContent: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  saveButtonTitle: { color: '#0A3475', fontSize: 27, fontWeight: '700', textAlign: 'center' },
  saveButtonSubtitle: {
    marginTop: 5,
    color: '#1567C8',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  findButtonTitle: { color: '#FFFFFF', fontSize: 28, fontWeight: '700', textAlign: 'center' },
  savedStatus: { alignItems: 'center', marginTop: 10 },
  savedStatusLabel: { color: '#FFFFFF', fontSize: 17, fontWeight: '600' },
  savedStatusValue: { marginTop: 2, color: '#FFFFFF', fontSize: 20, fontWeight: '400' },
  footer: { marginTop: 20, color: '#FFFFFF', fontSize: 14, textAlign: 'center', opacity: 0.92 },
});
