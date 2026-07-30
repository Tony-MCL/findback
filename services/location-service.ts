import * as Location from 'expo-location';

import type { SavedLocation } from '@/types/saved-location';

export type LocationResult =
  | {
      success: true;
      location: SavedLocation;
    }
  | {
      success: false;
      reason: 'permission-denied' | 'position-unavailable';
    };

export async function getCurrentLocation(): Promise<LocationResult> {
  const permission =
    await Location.requestForegroundPermissionsAsync();

  if (permission.status !== Location.PermissionStatus.GRANTED) {
    return {
      success: false,
      reason: 'permission-denied',
    };
  }

  try {
    const currentPosition =
      await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

    return {
      success: true,
      location: {
        latitude: currentPosition.coords.latitude,
        longitude: currentPosition.coords.longitude,
        savedAt: new Date().toISOString(),
      },
    };
  } catch {
    return {
      success: false,
      reason: 'position-unavailable',
    };
  }
}
