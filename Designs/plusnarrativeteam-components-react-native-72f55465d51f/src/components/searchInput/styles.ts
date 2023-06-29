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

const searchHeight = 44;
export default (theme: Theme, state: 'normal' | 'errored' | 'focused' | 'disabled') => {
  return StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'column',
      alignContent: 'flex-start',
      alignItems: 'flex-start',
    },
    input: {
      flex: 1,
      padding: 10,
    },
    inputContainer: {
      width: '100%',
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      height: searchHeight,
      justifyContent: 'center',
      borderRadius: theme.roundness,
      padding: theme.padding.SURFACE,
      ...inputStyleFromState(theme, state),
    },
    searchIcon: {
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.colors.GREYSCALE60,
    },
    submitIcon: {
      fontSize: 26,
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.colors.WHITE,
      borderRadius: theme.roundness,
      backgroundColor: theme.colors.PRIMARY100,
    },
    resultsContainer: {
      width: '100%',
      height: 256,
      zIndex: 10,
      position: 'absolute',
      opacity: 0.4,
      backgroundColor: theme.colors.DANGER,
      top: searchHeight + theme.padding.SURFACE,
    },
  });
};
