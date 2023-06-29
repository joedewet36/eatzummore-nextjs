import React from 'react';
import { ViewProps, TextProps, ImageBackgroundProps, TextStyle, ViewStyle, TextInputProps, StyleProp, StyleSheet, ImageStyle } from 'react-native';
import { TypographyVariant as TypographyVariant$1, Theme as Theme$1 } from '@plus-components/types/theme';

declare const SafeAreaView$1: React.FC<ViewProps>;

interface Props$6 extends TextProps {
    /** Font variant to use. Required */
    variant: TypographyVariant$1;
}
declare const Typography: React.FC<Props$6>;

interface Props$5 extends ImageBackgroundProps {
    /** Avatar size. Defaults to 'medium' */
    size?: 'small' | 'medium' | 'large';
    /** Image url to show on avatar */
    imageUrl?: string;
}
declare const Avatar: React.FC<Props$5>;

declare type ToggleEvent = {
    name: string;
    active: boolean;
};
declare type Props$4 = {
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
declare const Pill: React.FC<Props$4>;

interface Props$3 extends TextInputProps {
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
declare const TextInput: React.FC<Props$3>;

interface Props$2 extends ViewProps {
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
declare const Button: React.FC<Props$2>;

interface Props$1 extends ViewProps {
    /** Add default border style to surface. Defaults to true */
    addBorders?: boolean;
    /** Should surface be full width */
    fullWidth?: boolean;
}
declare const SafeAreaView: React.FC<Props$1>;

declare const PhoneNumber: React.FC<{
    label: string;
    placeHolder: string;
}>;

declare type Props = {
    children: React.ReactNode;
    theme?: Theme$1;
};
declare const ThemeContext: React.Context<Theme$1>;
declare const ThemeProvider: ({ ...props }: Props) => JSX.Element;
/**
 * Hook to retrieve theme context.
 *
 * @param overRides {object} overrides some or all values on the theme.
 *
 * @return {Theme}
 */
declare const useTheme: (overRides?: Theme$1 | undefined) => Theme$1;
/**
 * Hook to wrap Stylesheet with theme.
 * @param styler {function} function that takes in the theme and returned named styles.
 * @param overRides {object} overrides some or all values on the theme.
 *
 * @return {Theme}
 */
declare const useStyleWithTheme: (styler: (theme: Theme$1) => StyleSheet.NamedStyles<ViewStyle | TextStyle | ImageStyle | any>, overRides?: Theme$1) => StyleSheet.NamedStyles<ViewStyle | TextStyle | ImageStyle | any>;

interface ITypography {
    H1: TextStyle;
    H2: TextStyle;
    H3: TextStyle;
    H4: TextStyle;
    SUBTITLE_LIGHT: TextStyle;
    SUBTITLE_BOLD: TextStyle;
    SUBTITLE_LIGHT_UPPER: TextStyle;
    SUBTITLE_BOLD_UPPER: TextStyle;
    BODY_REGULAR: TextStyle;
    BODY_BOLD: TextStyle;
    BODY2_REGULAR: TextStyle;
    BODY2_BOLD: TextStyle;
    BODY3_REGULAR: TextStyle;
    BODY3_BOLD: TextStyle;
}
interface IColor {
    WHITE: string;
    PRIMARY50: string;
    PRIMARY100: string;
    SECONDARY50: string;
    SECONDARY100: string;
    GREYSCALE20: string;
    GREYSCALE40: string;
    GREYSCALE60: string;
    GREYSCALE80: string;
    GREYSCALE100: string;
    DANGER: string;
    SUCCESS: string;
    LIGHTGREY: string;
    LIGHTDIMBACKGROUND: string;
    TRANSPARENT: string;
}
interface IPadding {
    SURFACE: number;
    SCREEN: number;
}
declare type TypographyVariant = 'H1' | 'H2' | 'H3' | 'H4' | 'SUBTITLE_LIGHT' | 'SUBTITLE_BOLD' | 'SUBTITLE_LIGHT_UPPER' | 'SUBTITLE_BOLD_UPPER' | 'BODY_REGULAR' | 'BODY_BOLD' | 'BODY2_REGULAR' | 'BODY2_BOLD' | 'BODY3_REGULAR' | 'BODY3_BOLD';
declare type Mode = 'adaptive' | 'exact';
declare type Theme = {
    dark: boolean;
    mode?: Mode;
    roundness: number;
    colors: IColor;
    fonts: ITypography;
    padding: IPadding;
};

declare const applyAlpha: (color: string, alpha: number) => string;

export { Avatar, Button, IColor, IPadding, ITypography, Mode, PhoneNumber, Pill, SafeAreaView$1 as SafeAreaView, SafeAreaView as Surface, TextInput, Theme, ThemeContext, ThemeProvider, Typography, TypographyVariant, applyAlpha, useStyleWithTheme, useTheme };
