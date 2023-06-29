import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_100Thin as Roboto100Thin,
  Roboto_700Bold as Roboto700Bold,
  Roboto_300Light as Roboto300Light,
  Roboto_900Black as Roboto900Black,
  Roboto_400Regular as Roboto400Regular,
  Roboto_500Medium as Roboto500Medium,
} from '@expo-google-fonts/roboto';
import ThemeProvider from '@plus-components/theme/ThemeProvider';
import { Text } from 'react-native';
import StorybookUIRoot from './story';

// eslint-disable-next-line import/extensions,import/extensions,@typescript-eslint/no-var-requires
const icoMoon = require('@assets/icomoon/icomoon.ttf');

export default () => {
  const [fontsLoaded] = useFonts({
    Roboto700Bold,
    Roboto100Thin,
    Roboto300Light,
    Roboto400Regular,
    Roboto500Medium,
    Roboto900Black,
    IcoMoon: icoMoon,
  });
  if (!fontsLoaded) return <AppLoading />;
  return (
    <ThemeProvider>
      <StorybookUIRoot />
    </ThemeProvider>
  );
};
