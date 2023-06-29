import React, { useMemo } from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

import { TypographyVariant } from '@plus-components/types/theme';
import { useTheme } from '@plus-components/theme/ThemeProvider';
import styles from './styles';

interface Props extends TextProps {
  /** Font variant to use. Required */
  variant: TypographyVariant;
}
const Typography: React.FC<Props> = props => {
  const { variant, style = undefined, children, ...rest } = props;
  const theme = useTheme();
  const variantStyles: TextStyle = useMemo((): TextStyle => styles(variant, theme), [theme, variant]);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Text style={[variantStyles, style]} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
