import { TextStyle } from 'react-native';
export interface ITypography {
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
export interface IColor {
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
export interface IPadding {
    SURFACE: number;
    SCREEN: number;
}
export declare type TypographyVariant = 'H1' | 'H2' | 'H3' | 'H4' | 'SUBTITLE_LIGHT' | 'SUBTITLE_BOLD' | 'SUBTITLE_LIGHT_UPPER' | 'SUBTITLE_BOLD_UPPER' | 'BODY_REGULAR' | 'BODY_BOLD' | 'BODY2_REGULAR' | 'BODY2_BOLD' | 'BODY3_REGULAR' | 'BODY3_BOLD';
export declare type Mode = 'adaptive' | 'exact';
export declare type Theme = {
    dark: boolean;
    mode?: Mode;
    roundness: number;
    colors: IColor;
    fonts: ITypography;
    padding: IPadding;
};
