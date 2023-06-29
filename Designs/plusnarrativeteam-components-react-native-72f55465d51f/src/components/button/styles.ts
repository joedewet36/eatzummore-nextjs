import { StyleSheet } from 'react-native';

import { Theme } from '@plus-components/types/theme';

const getVariantStyles = (theme: Theme, variant: 'primary' | 'secondary' | 'outline' | 'danger', disabled: boolean) => {
  const { colors } = theme;
  switch (variant) {
    case 'danger':
      return {
        container: {
          backgroundColor: disabled ? colors.GREYSCALE40 : colors.DANGER,
          borderColor: disabled ? colors.GREYSCALE40 : colors.DANGER,
        },
        label: {
          color: disabled ? colors.GREYSCALE60 : colors.WHITE,
        },
      };
    case 'outline':
      return {
        container: {
          backgroundColor: colors.WHITE,
          borderColor: disabled ? colors.GREYSCALE40 : colors.PRIMARY100,
        },
        label: {
          color: disabled ? colors.GREYSCALE40 : colors.GREYSCALE100,
        },
      };
    case 'secondary':
      return {
        container: {
          borderColor: disabled ? colors.GREYSCALE40 : colors.PRIMARY50,
          backgroundColor: disabled ? colors.GREYSCALE40 : colors.PRIMARY50,
        },
        label: {
          color: disabled ? colors.GREYSCALE60 : colors.WHITE,
        },
      };
    case 'primary':
    default:
      return {
        container: {
          borderColor: disabled ? colors.GREYSCALE40 : colors.PRIMARY100,
          backgroundColor: disabled ? colors.GREYSCALE40 : colors.PRIMARY100,
        },
        label: {
          color: disabled ? colors.GREYSCALE60 : colors.WHITE,
        },
      };
  }
};

export default (
  theme: Theme,
  variant: 'primary' | 'secondary' | 'outline' | 'danger',
  fullWidth: boolean,
  disabled: boolean,
  singleChild: boolean,
) => {
  const variantStyles = getVariantStyles(theme, variant, disabled);
  return StyleSheet.create({
    container: {
      borderWidth: 1,
      paddingVertical: 15,
      flexDirection: 'row',
      paddingHorizontal: 23,
      borderRadius: theme.roundness,
      width: fullWidth ? '100%' : 'auto',
      justifyContent: singleChild ? 'center' : 'space-between',
      ...variantStyles.container,
    },
    label: {
      ...variantStyles.label,
    },
  });
};
