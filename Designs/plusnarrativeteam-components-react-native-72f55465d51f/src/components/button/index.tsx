import React, { useMemo } from 'react';
import { TouchableOpacity, View, ViewProps, Text, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import Typography from '@plus-components/components/typography';
import { useTheme } from '@plus-components/theme/ThemeProvider';

import Styles from './styles';

interface Props extends ViewProps {
  /** Label to show on button. Defaults to 'Button' if not label or icon is given */
  label?: string;
  /** Icon to show on the right of the button */
  rightIcon?: React.ReactNode;
  /** Label to show on the right of the button. If right icon is also passed, rightIcon will be preferred */
  rightLabel?: string;
  /** Should button be full width. Defaults to true */
  fullWidth?: boolean;
  /** Button variant. Defaults to 'primary' */
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  /** Function called when button is pressed */
  onPress: () => void;
  /** Should button be disabled? defaults to false */
  disabled?: boolean;
}

const Button: React.FC<Props> = props => {
  const {
    label = null,
    rightLabel = null,
    rightIcon = null,
    fullWidth = true,
    variant = 'primary',
    onPress,
    disabled = false,
    style: styleOverrides,
    ...rest
  } = props;
  // We need to center the label/icon when it's the only child
  const singleChild = useMemo(() => {
    return [label, rightLabel, rightIcon].filter(Boolean).length === 1;
  }, [label, rightIcon, rightLabel]);

  const theme = useTheme();
  const styles = Styles(theme, variant, fullWidth, disabled, singleChild);

  const wrappedLabel = label && (
    <Typography style={styles.label} variant="BODY_BOLD" numberOfLines={1} ellipsizeMode="tail">
      {label}
    </Typography>
  );
  const rightWrappedLabel = rightLabel && (
    <Typography style={styles.label} variant="BODY_REGULAR" numberOfLines={1} ellipsizeMode="tail">
      {rightLabel}
    </Typography>
  );

  const rightIconWithStyles = rightIcon && <Text style={styles.label}>{rightIcon}</Text>;

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} disabled={disabled}>
      <View style={StyleSheet.compose(styles.container as ViewStyle, styleOverrides)} {...rest}>
        <>
          {wrappedLabel}
          {rightIconWithStyles || rightWrappedLabel}
        </>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
