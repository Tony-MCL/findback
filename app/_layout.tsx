import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { AppState, Platform } from 'react-native';

async function hideAndroidNavigationBar() {
  if (Platform.OS !== 'android') {
    return;
  }

  try {
    await NavigationBar.setBehaviorAsync('overlay-swipe');
    await NavigationBar.setVisibilityAsync('hidden');
  } catch {
    // Some Android configurations do not allow changing the navigation bar.
  }
}

export default function RootLayout() {
  useEffect(() => {
    void hideAndroidNavigationBar();

    const subscription = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        void hideAndroidNavigationBar();
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <StatusBar style="dark" />
    </>
  );
}
