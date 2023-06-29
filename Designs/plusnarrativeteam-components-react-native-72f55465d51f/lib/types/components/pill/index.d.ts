import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';
export declare type ToggleEvent = {
    name: string;
    active: boolean;
};
declare type Props = {
    /** Name used to identify the pill, think name field in an HTML input */
    name: string;
    /** If true, will show the pill in the active state */
    active?: boolean;
    /** Called when pill active state is toggled */
    onToggle?: (event: ToggleEvent) => void;
    /** Text to be displayed in the pill */
    label: string & React.ReactNode;
    /** Size on the pill */
    size?: 'default' | 'small';
    /** Should the pill be disabled? */
    disabled?: boolean;
    /** Specify text styling */
    textStyle?: TextStyle;
    /** Container Styling */
    containerStyle?: ViewStyle;
    /** Icon to show on the pill */
    icon?: React.ReactElement;
};
declare const Pill: React.FC<Props>;
export default Pill;
