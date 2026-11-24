import { Stack } from 'expo-router';

import { ShoppingProvider } from '@/context/ShoppingContext';

export default function RootLayout() {
  return (
    <ShoppingProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ShoppingProvider>
  );
}