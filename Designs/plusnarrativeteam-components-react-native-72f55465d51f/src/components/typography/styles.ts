import { TextStyle } from 'react-native';

import { TypographyVariant, Theme } from '@plus-components/types/theme';

export default (variant: TypographyVariant, theme: Theme): TextStyle => ({
  color: theme.colors.GREYSCALE100,
  ...theme.fonts[variant],
});
