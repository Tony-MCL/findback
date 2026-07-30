import { Linking, Platform } from 'react-native';

import type { SavedLocation } from '@/types/saved-location';

export async function openSavedLocationInMaps(
  location: SavedLocation,
): Promise<void> {
  const coordinates = `${location.latitude},${location.longitude}`;

  const url =
    Platform.OS === 'ios'
      ? `http://maps.apple.com/?daddr=${coordinates}&dirflg=d`
      : `https://www.google.com/maps/dir/?api=1&destination=${coordinates}`;

  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
    throw new Error('No supported maps app is available.');
  }

  await Linking.openURL(url);
}
