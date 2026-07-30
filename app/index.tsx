import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Linking,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { getCurrentLocation } from '@/services/location-service';
import {
  deleteSavedLocation,
  getSavedLocation,
  saveLocation,
} from '@/services/location-storage';
import type { SavedLocation } from '@/types/saved-location';
import { openSavedLocationInMaps } from '@/services/map-navigation';

export default function HomeScreen() {
  const [savedLocation, setSavedLocation] =
    useState<SavedLocation | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
            'FindBack trenger posisjonstilgang for å kunne huske stedet du befinner deg på.',
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

      Alert.alert('Sted lagret');
    } catch {
      Alert.alert(
        'Kunne ikke lagre stedet',
        'Noe gikk galt under lagringen. Prøv igjen.',
      );
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDeleteLocation() {
    if (isDeleting) {
      return;
    }

    setIsDeleting(true);

    try {
      await deleteSavedLocation();
      setSavedLocation(null);
    } catch {
      Alert.alert(
        'Kunne ikke slette stedet',
        'Noe gikk galt. Prøv igjen.',
      );
    } finally {
      setIsDeleting(false);
    }
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>FindBack</Text>
          <Text style={styles.subtitle}>
            Never wonder where again.
          </Text>
        </View>

        <View style={styles.actions}>
          {savedLocation ? (
            <>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Ta meg tilbake"
                style={({ pressed }) => [
                  styles.primaryButton,
                  pressed && styles.buttonPressed,
                ]}
                onPress={() => {
                  void openSavedLocationInMaps(savedLocation).catch(() => {
                    Alert.alert(
                      'Kunne ikke åpne kart',
                      'FindBack fant ingen kartapp som kunne åpne den lagrede posisjonen.',
                    );
                  });
                }}
              >
                <Text style={styles.primaryButtonText}>
                  🧭 Ta meg tilbake
                </Text>
              </Pressable>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Slett lagret sted"
                disabled={isDeleting}
                style={({ pressed }) => [
                  styles.deleteButton,
                  pressed && styles.buttonPressed,
                  isDeleting && styles.buttonDisabled,
                ]}
                onPress={() => {
                  void handleDeleteLocation();
                }}
              >
                {isDeleting ? (
                  <ActivityIndicator />
                ) : (
                  <Text style={styles.deleteButtonText}>
                    🗑️ Slett sted
                  </Text>
                )}
              </Pressable>
            </>
          ) : (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Husk sted"
              disabled={isSaving}
              style={({ pressed }) => [
                styles.primaryButton,
                pressed && styles.buttonPressed,
                isSaving && styles.buttonDisabled,
              ]}
              onPress={() => {
                void handleSaveLocation();
              }}
            >
              {isSaving ? (
                <View style={styles.savingContent}>
                  <ActivityIndicator color="#FFFFFF" />
                  <Text style={styles.primaryButtonText}>
                    Henter posisjon …
                  </Text>
                </View>
              ) : (
                <Text style={styles.primaryButtonText}>
                  📍 Husk sted
                </Text>
              )}
            </Pressable>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F5F2',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 64,
    paddingBottom: 32,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    color: '#17211C',
    fontSize: 42,
    fontWeight: '700',
    letterSpacing: -1.5,
  },
  subtitle: {
    marginTop: 8,
    color: '#667069',
    fontSize: 17,
  },
  actions: {
    gap: 12,
  },
  primaryButton: {
    minHeight: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: '#1E6B4E',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  deleteButton: {
    minHeight: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    backgroundColor: '#E7E4DE',
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  buttonPressed: {
    opacity: 0.82,
  },
  buttonDisabled: {
    opacity: 0.65,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },
  deleteButtonText: {
    color: '#39423D',
    fontSize: 18,
    fontWeight: '600',
  },
  savingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});
