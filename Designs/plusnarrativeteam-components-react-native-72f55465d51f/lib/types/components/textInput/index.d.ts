import React from 'react';
import { TextInputProps, TextStyle, ViewStyle, StyleProp } from 'react-native';
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
declare const TextInput: React.FC<Props>;
export default TextInput;
