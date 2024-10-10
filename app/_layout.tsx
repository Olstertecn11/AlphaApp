import type { ReactNode } from 'react';
import { Stack } from 'expo-router';
import { NativeBaseProvider } from 'native-base';

export default function RootLayout(): ReactNode {
  return (
    <NativeBaseProvider>
      <Stack />
    </NativeBaseProvider>
  );
}
