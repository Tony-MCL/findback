import { ActivityIndicator, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import { t } from '@/i18n';

type Props = {
  visible: boolean;
  displayPrice?: string;
  isConnected: boolean;
  isPurchasing: boolean;
  isRestoring: boolean;
  onPurchase: () => void;
  onRestore: () => void;
  onClose: () => void;
};

export default function FavoritesPurchaseModal({
  visible,
  displayPrice,
  isConnected,
  isPurchasing,
  isRestoring,
  onPurchase,
  onRestore,
  onClose,
}: Props) {
  const busy = isPurchasing || isRestoring;

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <Text style={styles.star}>★</Text>
          <Text style={styles.title}>{t('purchaseTitle')}</Text>
          <Text style={styles.body}>{t('purchaseBody')}</Text>
          <View style={styles.benefits}>
            <Text style={styles.benefit}>✓ {t('unlimitedFavorites')}</Text>
            <Text style={styles.benefit}>✓ {t('oneTimePurchase')}</Text>
            <Text style={styles.benefit}>✓ {t('noSubscription')}</Text>
          </View>

          <Pressable
            accessibilityRole="button"
            disabled={busy || !isConnected || !displayPrice}
            style={({ pressed }) => [styles.buyButton, (pressed || busy) && styles.pressed, (!isConnected || !displayPrice) && styles.disabled]}
            onPress={onPurchase}
          >
            {isPurchasing ? <ActivityIndicator color="#FFFFFF" /> : (
              <Text style={styles.buyText}>
                {displayPrice ? t('buyFor', { price: displayPrice }) : t('storeLoading')}
              </Text>
            )}
          </Pressable>

          <Pressable accessibilityRole="button" disabled={busy || !isConnected} onPress={onRestore} style={styles.textButton}>
            {isRestoring ? <ActivityIndicator color="#0A3475" /> : <Text style={styles.restoreText}>{t('restorePurchases')}</Text>}
          </Pressable>
          <Pressable accessibilityRole="button" disabled={busy} onPress={onClose} style={styles.textButton}>
            <Text style={styles.notNowText}>{t('notNow')}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: 'rgba(0, 25, 64, 0.62)' },
  card: { borderRadius: 28, backgroundColor: '#FFFFFF', padding: 24, shadowColor: '#001F4E', shadowOffset: { width: 0, height: 12 }, shadowOpacity: 0.3, shadowRadius: 20, elevation: 12 },
  star: { color: '#F4B400', fontSize: 46, textAlign: 'center' },
  title: { marginTop: 2, color: '#0A3475', fontSize: 28, fontWeight: '800', textAlign: 'center' },
  body: { marginTop: 10, color: '#315780', fontSize: 17, lineHeight: 24, textAlign: 'center' },
  benefits: { gap: 8, marginVertical: 20, paddingHorizontal: 10 },
  benefit: { color: '#123E73', fontSize: 17, fontWeight: '600' },
  buyButton: { minHeight: 58, alignItems: 'center', justifyContent: 'center', borderRadius: 18, backgroundColor: '#0866E8', paddingHorizontal: 16 },
  buyText: { color: '#FFFFFF', fontSize: 19, fontWeight: '800', textAlign: 'center' },
  textButton: { minHeight: 42, alignItems: 'center', justifyContent: 'center', marginTop: 5 },
  restoreText: { color: '#0A3475', fontSize: 16, fontWeight: '700' },
  notNowText: { color: '#55708F', fontSize: 16, fontWeight: '600' },
  pressed: { opacity: 0.72 },
  disabled: { opacity: 0.52 },
});
