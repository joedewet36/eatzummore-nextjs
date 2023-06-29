import React from 'react';
import { ViewProps } from 'react-native';
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
declare const Button: React.FC<Props>;
export default Button;
