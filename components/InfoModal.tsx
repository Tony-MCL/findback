import { Alert, Linking, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { t } from '@/i18n';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const PRIVACY_URL = 'https://morningcoffeelabs.no/findback-privacy';
const TERMS_URL = 'https://morningcoffeelabs.no/findback-terms';
const WEBSITE_URL = 'https://morningcoffeelabs.no';
const CONTACT_URL = 'mailto:post@morningcoffeelabs.no';

export default function InfoModal({ visible, onClose }: Props) {
  async function openLink(url: string) {
    try {
      await Linking.openURL(url);
    } catch {
      Alert.alert(t('linkErrorTitle'), t('linkErrorMessage'));
    }
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <View style={styles.backdrop}>
        <View style={styles.card}>
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>{t('aboutTitle')}</Text>
            <Text style={styles.body}>{t('aboutBody')}</Text>

            <View style={styles.links}>
              <Pressable style={({ pressed }) => [styles.linkButton, pressed && styles.pressed]} onPress={() => void openLink(PRIVACY_URL)}>
                <Text style={styles.linkText}>{t('privacy')}</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [styles.linkButton, pressed && styles.pressed]} onPress={() => void openLink(TERMS_URL)}>
                <Text style={styles.linkText}>{t('terms')}</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [styles.linkButton, pressed && styles.pressed]} onPress={() => void openLink(CONTACT_URL)}>
                <Text style={styles.linkText}>{t('contact')}</Text>
                <Text style={styles.linkValue}>post@morningcoffeelabs.no</Text>
              </Pressable>

              <Pressable style={({ pressed }) => [styles.linkButton, pressed && styles.pressed]} onPress={() => void openLink(WEBSITE_URL)}>
                <Text style={styles.linkText}>{t('website')}</Text>
                <Text style={styles.linkValue}>morningcoffeelabs.no</Text>
              </Pressable>
            </View>

            <Text style={styles.copyright}>© Morning Coffee Labs</Text>
          </ScrollView>

          <Pressable accessibilityRole="button" style={({ pressed }) => [styles.closeButton, pressed && styles.pressed]} onPress={onClose}>
            <Text style={styles.closeButtonText}>{t('close')}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 36,
    backgroundColor: 'rgba(0, 19, 52, 0.72)',
  },
  card: {
    maxHeight: '86%',
    overflow: 'hidden',
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    shadowColor: '#001F4E',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.28,
    shadowRadius: 18,
    elevation: 14,
  },
  content: { paddingHorizontal: 24, paddingTop: 28, paddingBottom: 18 },
  title: { color: '#082E68', fontSize: 28, fontWeight: '800', textAlign: 'center' },
  body: {
    marginTop: 16,
    color: '#24364E',
    fontSize: 17,
    lineHeight: 25,
    textAlign: 'center',
  },
  links: { marginTop: 24, gap: 10 },
  linkButton: {
    minHeight: 58,
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: '#EEF5FF',
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  linkText: { color: '#0D57B7', fontSize: 17, fontWeight: '700', textAlign: 'center' },
  linkValue: { marginTop: 3, color: '#45617F', fontSize: 14, textAlign: 'center' },
  copyright: { marginTop: 22, color: '#61738A', fontSize: 13, textAlign: 'center' },
  closeButton: {
    minHeight: 58,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#082E68',
  },
  closeButtonText: { color: '#FFFFFF', fontSize: 18, fontWeight: '700' },
  pressed: { opacity: 0.78 },
});
