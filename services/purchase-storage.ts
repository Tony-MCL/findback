import AsyncStorage from '@react-native-async-storage/async-storage';

export const FAVORITES_PRODUCT_ID = 'findback_favorites';
const ENTITLEMENT_KEY = '@findback/favorites-entitlement';

export async function getCachedFavoritesEntitlement(): Promise<boolean> {
  return (await AsyncStorage.getItem(ENTITLEMENT_KEY)) === 'owned';
}

export async function cacheFavoritesEntitlement(owned: boolean): Promise<void> {
  if (owned) {
    await AsyncStorage.setItem(ENTITLEMENT_KEY, 'owned');
  } else {
    await AsyncStorage.removeItem(ENTITLEMENT_KEY);
  }
}
