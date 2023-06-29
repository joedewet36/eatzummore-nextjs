import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  View,
  TextInputProps,
  TextInput as RNTextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextStyle,
  ViewStyle,
  StyleSheet,
  StyleProp,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Typography from '@plus-components/components/typography';
import { useTheme } from '@plus-components/theme/ThemeProvider';
import Style from './styles';

interface Props extends TextInputProps {
  /** Input label to show above input field */
  label?: string;
  /** Error to display in errored state */
  error?: string;
  /** Overrides for label styles */
  labelStyles?: TextStyle;
  /** Overrides for container styles */
  containerStyles?: StyleProp<ViewStyle>;
  /** Show TextInput as required */
  required?: boolean;
  /** Called when tooltip icon is pressed */
  onExplain?: () => void;
}

const TextInput: React.FC<Props> = props => {
  const {
    label,
    error = '',
    style: styleOverride,
    labelStyles,
    containerStyles,
    onFocus,
    onBlur,
    editable,
    required,
    onExplain = null,
    ...rest
  } = props;
  const [state, setState] = useState<'normal' | 'errored' | 'focused' | 'disabled'>('normal');

  const handleFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setState('focused');
      if (onFocus) onFocus(e);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setState('normal');
      if (onBlur) onBlur(e);
    },
    [onBlur],
  );

  useEffect(() => {
    if (editable) setState('disabled');
  }, [editable]);

  useEffect(() => {
    if (error?.length) return setState('errored');
    return setState('normal');
  }, [error]);

  const theme = useTheme();
  const styles = useMemo(() => Style(theme, state), [theme, state]);
  return (
    <View style={StyleSheet.compose(styles.container as ViewStyle, containerStyles)}>
      <View style={styles.labelContainer}>
        {label && (
          <Typography style={labelStyles} variant="BODY2_REGULAR">
            {label}
            {required && <Text style={styles.requiredLabel}>*</Text>}
          </Typography>
        )}
        {onExplain && (
          <Text>
            {`  `}
            <Ionicons style={styles.infoIcon} name="information-circle-outline" onPress={onExplain} />
          </Text>
        )}
      </View>
      <RNTextInput
        editable={editable}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={StyleSheet.compose(styles.input, styleOverride)}
        {...rest}
      />
      {Boolean(error?.length) && (
        <Typography style={styles.errorText} variant="BODY3_REGULAR">
          {error}
        </Typography>
      )}
    </View>
  );
};

export default TextInput;
