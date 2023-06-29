import React from 'react';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '@plus-components/types/theme';
declare type Props = {
    children: React.ReactNode;
    theme?: Theme;
};
export declare const ThemeContext: React.Context<Theme>;
export declare const ThemeProvider: ({ ...props }: Props) => JSX.Element;
/**
 * Hook to retrieve theme context.
 *
 * @param overRides {object} overrides some or all values on the theme.
 *
 * @return {Theme}
 */
export declare const useTheme: (overRides?: Theme | undefined) => Theme;
/**
 * Hook to wrap Stylesheet with theme.
 * @param styler {function} function that takes in the theme and returned named styles.
 * @param overRides {object} overrides some or all values on the theme.
 *
 * @return {Theme}
 */
export declare const useStyleWithTheme: (styler: (theme: Theme) => StyleSheet.NamedStyles<ViewStyle | TextStyle | ImageStyle | any>, overRides?: Theme) => StyleSheet.NamedStyles<ViewStyle | TextStyle | ImageStyle | any>;
export default ThemeProvider;
