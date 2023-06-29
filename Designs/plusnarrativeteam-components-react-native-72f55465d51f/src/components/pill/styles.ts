import { StyleSheet } from 'react-native';
import { Theme } from '@plus-components/types/theme';

export default (theme: Theme, active: boolean, size: 'default' | 'small') => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      borderWidth: 1.5,
      borderRadius: 24,
      paddingVertical: size === 'default' ? 10 : 6,
      paddingHorizontal: size === 'default' ? 30 : 10,
      backgroundColor: active ? colors.PRIMARY50 : colors.WHITE,
      borderColor: active ? colors.PRIMARY50 : colors.GREYSCALE40,
    },
    label: {
      color: active ? colors.WHITE : colors.GREYSCALE100,
    },
  });
};
