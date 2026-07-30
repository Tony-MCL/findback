import { Linking, Platform } from 'react-native';

import type { SavedLocation } from '@/types/saved-location';

export async function openSavedLocationInMaps(
  location: SavedLocation,
): Promise<void> {
  const coordinates = `${location.latitude},${location.longitude}`;
  const encodedLabel = encodeURIComponent('FindBack');

  const url = Platform.select({
    ios: `http://maps.apple.com/?ll=${coordinates}&q=${encodedLabel}`,
    android: `https://www.google.com/maps/search/?api=1&query=${coordinates}`,
    default: `https://www.google.com/maps/search/?api=1&query=${coordinates}`,
  });

  if (!url) {
    throw new Error('No supported maps URL is available.');
  }

  await Linking.openURL(url);
}
