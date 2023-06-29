import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
export const hasNotch: boolean = Math.floor(screen.height) - Math.floor(window.height) > 0;
const androidStatusBarHeight: number | undefined = hasNotch ? StatusBar.currentHeight : 0;
const statusBarHeight: number | undefined = Platform.OS === 'android' ? androidStatusBarHeight : 0;

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
  },
});
