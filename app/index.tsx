import { useEffect, useRef, useState } from 'react';
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

import { getCurrentLocation } from '@/services/location-service';
import {
  getSavedLocation,
  saveLocation,
} from '@/services/location-storage';
import { openSavedLocationInMaps } from '@/services/map-navigation';
import type { SavedLocation } from '@/types/saved-location';

const TOAST_DURATION_MS = 2500;

function formatSavedAt(savedAt: string): string {
  const date = new Date(savedAt);

  if (Number.isNaN(date.getTime())) {
    return 'ukjent tidspunkt';
  }

  const today = new Date();
  const isToday =
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate();

  const time = new Intl.DateTimeFormat('nb-NO', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);

  if (isToday) {
    return `i dag, ${time}`;
  }

  const day = new Intl.DateTimeFormat('nb-NO', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);

  return `${day}, ${time}`;
}

export default function HomeScreen() {
  const [savedLocation, setSavedLocation] =
    useState<SavedLocation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const toastOpacity = useRef(new Animated.Value(0)).current;
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    async function loadSavedLocation() {
      try {
        const location = await getSavedLocation();
        setSavedLocation(location);
      } catch {
        Alert.alert(
          'Noe gikk galt',
          'FindBack kunne ikke lese den lagrede posisjonen.',
        );
      } finally {
        setIsLoading(false);
      }
    }

    void loadSavedLocation();
  }, []);

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
          Alert.alert(
            'Posisjonstilgang er nødvendig',
            'FindBack trenger posisjonstilgang for å kunne lagre stedet du befinner deg på.',
            [
              {
                text: 'Avbryt',
                style: 'cancel',
              },
              {
                text: 'Åpne innstillinger',
                onPress: () => {
                  void Linking.openSettings();
                },
              },
            ],
          );

          return;
        }

        Alert.alert(
          'Kunne ikke hente posisjonen',
          'Kontroller at posisjonstjenester er aktivert, og prøv igjen.',
        );

        return;
      }

      await saveLocation(result.location);
      setSavedLocation(result.location);
      showSavedToast();
    } catch {
      Alert.alert(
        'Kunne ikke lagre stedet',
        'Noe gikk galt under lagringen. Prøv igjen.',
      );
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
      Alert.alert(
        'Kunne ikke åpne kart',
        'FindBack fant ingen kartapp som kunne åpne den lagrede posisjonen.',
      );
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
        <View style={styles.pinArea}>
          <Image
            source={require('@/assets/images/findback-pin.png')}
            style={styles.pinImage}
            resizeMode="contain"
            accessibilityLabel="FindBack-posisjonsnål"
          />
        </View>

        <View style={styles.content}>
          {isToastVisible ? (
            <Animated.View
              pointerEvents="none"
              style={[styles.toast, { opacity: toastOpacity }]}
            >
              <Image
                source={require('@/assets/images/findback-pin.png')}
                style={styles.toastIcon}
                resizeMode="contain"
                accessibilityIgnoresInvertColors
              />
              <Text style={styles.toastText}>Posisjon lagret</Text>
            </Animated.View>
          ) : null}

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Lagre posisjon"
            disabled={isSaving}
            style={({ pressed }) => [
              styles.saveButton,
              pressed && styles.buttonPressed,
              isSaving && styles.buttonDisabled,
            ]}
            onPress={() => {
              void handleSaveLocation();
            }}
          >
            {isSaving ? (
              <View style={styles.buttonLoadingContent}>
                <ActivityIndicator color="#0D3B84" />
                <Text style={styles.saveButtonTitle}>Henter posisjon …</Text>
              </View>
            ) : (
              <>
                <Text style={styles.saveButtonTitle}>Lagre posisjon</Text>
                {savedLocation ? (
                  <Text style={styles.saveButtonSubtitle}>
                    (overskriver tidligere lagret sted)
                  </Text>
                ) : null}
              </>
            )}
          </Pressable>

          {savedLocation ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Finn igjen"
              style={({ pressed }) => [
                styles.findButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => {
                void handleOpenMap();
              }}
            >
              <Text style={styles.findButtonTitle}>Finn igjen</Text>
            </Pressable>
          ) : null}

          {savedLocation ? (
            <View style={styles.savedStatus}>
              <Text style={styles.savedStatusLabel}>Sist lagret:</Text>
              <Text style={styles.savedStatusValue}>
                {formatSavedAt(savedLocation.savedAt)}
              </Text>
            </View>
          ) : null}
        </View>

        <Text style={styles.footer}>© Morning Coffee Labs</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0866E8',
  },
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
  pinArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 250,
  },
  pinImage: {
    width: '84%',
    maxWidth: 390,
    height: 360,
  },
  content: {
    gap: 14,
  },
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
  toastIcon: {
    width: 34,
    height: 42,
  },
  toastText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '700',
    textAlign: 'center',
  },
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
  buttonPressed: {
    opacity: 0.84,
    transform: [{ scale: 0.99 }],
  },
  buttonDisabled: {
    opacity: 0.68,
  },
  buttonLoadingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  saveButtonTitle: {
    color: '#0A3475',
    fontSize: 27,
    fontWeight: '700',
    textAlign: 'center',
  },
  saveButtonSubtitle: {
    marginTop: 5,
    color: '#1567C8',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
  findButtonTitle: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  savedStatus: {
    alignItems: 'center',
    marginTop: 10,
  },
  savedStatusLabel: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
  },
  savedStatusValue: {
    marginTop: 2,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400',
  },
  footer: {
    marginTop: 20,
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.92,
  },
});