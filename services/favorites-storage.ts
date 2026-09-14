import AsyncStorage from '@react-native-async-storage/async-storage';

import type { FavoriteLocation } from '@/types/favorite-location';
import type { SavedLocation } from '@/types/saved-location';

const FAVORITES_KEY = '@findback/favorites';

function isFavorite(value: unknown): value is FavoriteLocation {
  if (!value || typeof value !== 'object') return false;
  const item = value as Partial<FavoriteLocation>;
  return (
    typeof item.id === 'string' &&
    typeof item.name === 'string' &&
    typeof item.createdAt === 'string' &&
    typeof item.latitude === 'number' && Number.isFinite(item.latitude) &&
    typeof item.longitude === 'number' && Number.isFinite(item.longitude)
  );
}

export async function getFavorites(): Promise<FavoriteLocation[]> {
  const stored = await AsyncStorage.getItem(FAVORITES_KEY);
  if (!stored) return [];

  try {
    const parsed: unknown = JSON.parse(stored);
    if (!Array.isArray(parsed) || !parsed.every(isFavorite)) throw new Error('Invalid favorites');
    return parsed;
  } catch {
    await AsyncStorage.removeItem(FAVORITES_KEY);
    return [];
  }
}

export async function setFavorites(favorites: FavoriteLocation[]): Promise<void> {
  await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
}

export function createFavorite(location: SavedLocation, name: string): FavoriteLocation {
  return {
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
    latitude: location.latitude,
    longitude: location.longitude,
    name,
    createdAt: new Date().toISOString(),
  };
}
