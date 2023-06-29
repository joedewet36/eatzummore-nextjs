import React, { useMemo } from 'react';
import { View, ViewProps } from 'react-native';

import { useTheme } from '@plus-components/theme/ThemeProvider';
import Style from './styles';

interface Props extends ViewProps {
  /** Add default border style to surface. Defaults to true */
  addBorders?: boolean;
  /** Should surface be full width */
  fullWidth?: boolean;
}

const SafeAreaView: React.FC<Props> = props => {
  const { style = undefined, children, addBorders = true, fullWidth = false, ...rest } = props;
  const theme = useTheme();
  const styles = useMemo(() => Style(theme, addBorders, fullWidth), [addBorders, fullWidth, theme]);
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};

export default SafeAreaView;
