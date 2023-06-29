import { StyleSheet } from 'react-native';

import { Theme } from '@plus-components/types/theme';
import { applyAlpha } from '@plus-components/utils/theme';

const inputStyleFromState = (theme: Theme, state: 'normal' | 'errored' | 'focused' | 'disabled') => {
  const { colors, fonts } = theme;
  switch (state) {
    case 'errored':
      return {
        backgroundColor: applyAlpha(colors.DANGER, 0.1),
        borderColor: colors.DANGER,
        color: colors.DANGER,
        ...fonts.BODY2_REGULAR,
        lineHeight: 0,
      };
    case 'disabled':
      return {
        borderColor: colors.GREYSCALE40,
        color: colors.GREYSCALE40,
        ...fonts.BODY2_REGULAR,
        lineHeight: 0,
      };
    case 'focused':
      return {
        borderColor: colors.PRIMARY50,
        color: colors.GREYSCALE100,
        ...fonts.BODY2_REGULAR,
        lineHeight: 0,
      };
    case 'normal':
    default:
      return {
        borderColor: colors.GREYSCALE40,
        color: colors.GREYSCALE100,
        ...fonts.BODY2_REGULAR,
        lineHeight: 0,
      };
  }
};

export default (theme: Theme, state: 'normal' | 'errored' | 'focused' | 'disabled') => {
  return StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'column',
      paddingHorizontal: 30,
    },
    input: {
      borderWidth: 1,
      borderRadius: theme.roundness,
      ...inputStyleFromState(theme, state),
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
    inputContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: theme.colors.GREYSCALE40,
      backgroundColor: theme.colors.WHITE,
      paddingVertical: 10,
    },
    text: {
      color: theme.colors.GREYSCALE80,
    },
    textInput: {
      paddingVertical: 10,
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: theme.colors.WHITE,
    },
    textButtonInput: {
      paddingVertical: 10,
      borderWidth: 1,
      borderRadius: 8,
      marginRight: 10,
      backgroundColor: theme.colors.WHITE,
    },
    lowerText: {
      color: theme.colors.LIGHTGREY,
    },
  });
};
