import React, { useMemo, createContext, useContext } from 'react';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { Theme } from '@plus-components/types/theme';
import { DefaultTheme } from '@plus-components/theme';

type Props = {
  children: React.ReactNode;
  theme?: Theme;
};

export const ThemeContext = createContext<Theme>(DefaultTheme);
ThemeContext.displayName = 'PlusThemeContext';
export const ThemeProvider = ({ ...props }: Props) => {
  const { theme: providedTheme, children } = props;
  const getTheme = () => {
    if (providedTheme) {
      return providedTheme;
    }
    const theme = DefaultTheme as Theme;

    return { ...theme };
  };
  return <ThemeContext.Provider value={getTheme()}>{children}</ThemeContext.Provider>;
};

/**
 * Hook to retrieve theme context.
 *
 * @param overRides {object} overrides some or all values on the theme.
 *
 * @return {Theme}
 */
export const useTheme = (overRides?: Theme | undefined): Theme => {
  const theme = useContext<Theme>(ThemeContext);
  return {
    ...theme,
    ...overRides,
  };
};

/**
 * Hook to wrap Stylesheet with theme.
 * @param styler {function} function that takes in the theme and returned named styles.
 * @param overRides {object} overrides some or all values on the theme.
 *
 * @return {Theme}
 */
export const useStyleWithTheme = (
  styler: (theme: Theme) => StyleSheet.NamedStyles<ViewStyle | TextStyle | ImageStyle | any>,
  overRides?: Theme,
): StyleSheet.NamedStyles<ViewStyle | TextStyle | ImageStyle | any> => {
  const theme: Theme = useTheme(overRides);
  return useMemo(() => StyleSheet.create(styler(theme)), [styler, theme]);
};

export default ThemeProvider;
