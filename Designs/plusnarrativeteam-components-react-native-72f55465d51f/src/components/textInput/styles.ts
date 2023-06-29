import { StyleSheet } from 'react-native';

import { Theme } from '@plus-components/types/theme';
import { applyAlpha } from '@plus-components/utils/theme';

const inputStyleFromState = (theme: Theme, state: 'normal' | 'errored' | 'focused' | 'disabled') => {
  const { colors } = theme;
  switch (state) {
    case 'errored':
      return {
        backgroundColor: applyAlpha(colors.DANGER, 0.1),
        borderColor: colors.DANGER,
        color: colors.DANGER,
      };
    case 'disabled':
      return {
        borderColor: colors.GREYSCALE40,
        color: colors.GREYSCALE40,
      };
    case 'focused':
      return {
        borderColor: colors.PRIMARY50,
        color: colors.GREYSCALE100,
      };
    case 'normal':
    default:
      return {
        borderColor: colors.GREYSCALE40,
        color: colors.GREYSCALE100,
      };
  }
};

export default (theme: Theme, state: 'normal' | 'errored' | 'focused' | 'disabled') => {
  return StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'column',
      alignContent: 'flex-start',
      alignItems: 'flex-start',
    },
    input: {
      padding: 10,
      width: '100%',
      borderWidth: 1,
      justifyContent: 'center',
      includeFontPadding: false,
      borderRadius: theme.roundness,
      ...inputStyleFromState(theme, state),
      ...theme.fonts.BODY2_REGULAR,
      lineHeight: 0,
    },
    labelContainer: {
      marginBottom: 4,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    requiredLabel: {
      color: theme.colors.DANGER,
    },
    infoIcon: {
      fontSize: 16,
      alignSelf: 'center',
    },
    errorText: {
      color: theme.colors.DANGER,
      paddingTop: theme.padding.SURFACE * 0.5,
    },
  });
};
