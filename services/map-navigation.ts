import { Linking, Platform } from 'react-native';

import type { SavedLocation } from '@/types/saved-location';

export async function openSavedLocationInMaps(
  location: SavedLocation,
): Promise<void> {
  const coordinates = `${location.latitude},${location.longitude}`;

  const url = Platform.select({
    ios: `http://maps.apple.com/?daddr=${coordinates}&dirflg=d`,
    android: `google.navigation:q=${coordinates}&mode=d`,
    default: `https://www.google.com/maps/dir/?api=1&destination=${coordinates}`,
  });

  if (!url) {
    throw new Error('No supported maps URL is available.');
  }

  await Linking.openURL(url);
}
