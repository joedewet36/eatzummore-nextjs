import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  View,
  FlatList,
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
  label: string;
  /** Weather the input should be in an errored state */
  errored?: boolean;
  /** Overrides for label styles */
  labelStyles?: TextStyle;
  /** Overrides for container styles */
  containerStyles?: StyleProp<ViewStyle>;
  /** Show TextInput as required */
  required?: boolean;
}

const SearchInput: React.FC<Props> = props => {
  const { label, errored, labelStyles, containerStyles, onFocus, onBlur, editable, required, ...rest } = props;
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
    if (errored) setState('errored');
    setState('normal');
  }, [errored]);
  const theme = useTheme();
  const styles = useMemo(() => Style(theme, state), [theme, state]);
  return (
    <View style={StyleSheet.compose(styles.container as ViewStyle, containerStyles)}>
      <View style={styles.inputContainer}>
        <Ionicons style={styles.searchIcon} name="search-outline" />
        <RNTextInput editable={editable} onFocus={handleFocus} onBlur={handleBlur} style={styles.input} {...rest} />
        <Ionicons style={styles.submitIcon} name="chevron-forward-outline" onPress={() => null} />
      </View>
      <View style={styles.resultsContainer} />
    </View>
  );
};

export default SearchInput;
