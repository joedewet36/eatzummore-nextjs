import { ITypography, IColor, IPadding, Theme } from '@plus-components/types/theme';

export const Colors: IColor = {
  WHITE: '#FFFFFF',
  PRIMARY50: '#82CB54',
  PRIMARY100: '#27824D',
  SECONDARY50: '#ED3B43',
  SECONDARY100: '#B72430',
  GREYSCALE20: '#F5F5F5',
  GREYSCALE40: '#CCCCCC',
  GREYSCALE60: '#999999',
  GREYSCALE80: '#4D4D4D',
  GREYSCALE100: '#1A1A1A',
  DANGER: '#ED3B43',
  SUCCESS: '#27824D',
  LIGHTGREY: '#7D7D7D',
  LIGHTDIMBACKGROUND: '#EDEDED',
  TRANSPARENT: 'transparent',
};

export const Typography: ITypography = {
  H1: {
    fontSize: 48,
    lineHeight: 57.6,
    fontWeight: '700',
    fontFamily: 'Roboto700Bold',
  },
  H2: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '700',
    fontFamily: 'Roboto700Bold',
  },
  H3: {
    fontSize: 33,
    lineHeight: 39.6,
    fontWeight: '700',
    fontFamily: 'Roboto700Bold',
  },
  H4: {
    fontSize: 28,
    lineHeight: 33.6,
    fontWeight: '600',
    fontFamily: 'Roboto500Medium',
  },
  SUBTITLE_LIGHT: {
    fontSize: 23,
    lineHeight: 27.6,
    fontWeight: '300',
    fontFamily: 'Roboto300Light',
  },
  SUBTITLE_BOLD: {
    fontSize: 23,
    lineHeight: 27.6,
    fontWeight: '600',
    fontFamily: 'Roboto500Medium',
  },
  SUBTITLE_LIGHT_UPPER: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '300',
    fontFamily: 'Roboto300Light',
    textTransform: 'uppercase',
  },
  SUBTITLE_BOLD_UPPER: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
    fontFamily: 'Roboto500Medium',
    textTransform: 'uppercase',
  },
  BODY_REGULAR: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    fontFamily: 'Roboto400Regular',
  },
  BODY_BOLD: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    fontFamily: 'Roboto700Bold',
  },
  BODY2_REGULAR: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'Roboto400Regular',
  },
  BODY2_BOLD: {
    fontSize: 13,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'Roboto700Bold',
  },
  BODY3_REGULAR: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '400',
    fontFamily: 'Roboto400Regular',
  },
  BODY3_BOLD: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '700',
    fontFamily: 'Roboto700Bold',
  },
};

export const Padding: IPadding = {
  SURFACE: 6,
  SCREEN: 24,
};

export const DefaultTheme: Theme = {
  dark: false,
  roundness: 4,
  colors: Colors,
  fonts: Typography,
  padding: Padding,
};
