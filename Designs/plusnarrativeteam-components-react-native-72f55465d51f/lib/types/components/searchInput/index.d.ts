import React from 'react';
import { TextInputProps, TextStyle, ViewStyle, StyleProp } from 'react-native';
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
declare const SearchInput: React.FC<Props>;
export default SearchInput;
