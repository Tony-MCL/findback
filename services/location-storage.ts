import AsyncStorage from '@react-native-async-storage/async-storage';

import type { SavedLocation } from '@/types/saved-location';

const SAVED_LOCATION_KEY = '@findback/saved-location';

function isSavedLocation(value: unknown): value is SavedLocation {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const location = value as Partial<SavedLocation>;

  return (
    typeof location.latitude === 'number' &&
    Number.isFinite(location.latitude) &&
    typeof location.longitude === 'number' &&
    Number.isFinite(location.longitude) &&
    typeof location.savedAt === 'string'
  );
}

export async function getSavedLocation(): Promise<SavedLocation | null> {
  const storedValue = await AsyncStorage.getItem(SAVED_LOCATION_KEY);

  if (!storedValue) {
    return null;
  }

  try {
    const parsedValue: unknown = JSON.parse(storedValue);

    if (!isSavedLocation(parsedValue)) {
      await AsyncStorage.removeItem(SAVED_LOCATION_KEY);
      return null;
    }

    return parsedValue;
  } catch {
    await AsyncStorage.removeItem(SAVED_LOCATION_KEY);
    return null;
  }
}

export async function saveLocation(
  location: SavedLocation,
): Promise<void> {
  await AsyncStorage.setItem(
    SAVED_LOCATION_KEY,
    JSON.stringify(location),
  );
}

export async function deleteSavedLocation(): Promise<void> {
  await AsyncStorage.removeItem(SAVED_LOCATION_KEY);
}
