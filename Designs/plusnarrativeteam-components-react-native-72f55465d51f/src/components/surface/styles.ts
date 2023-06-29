import { StyleSheet } from 'react-native';
import { Theme } from '@plus-components/types/theme';

export default (theme: Theme, addBorders: boolean, fullWidth: boolean) =>
  StyleSheet.create({
    container: {
      padding: theme.padding.SURFACE,
      borderWidth: addBorders ? 1 : 0,
      width: fullWidth ? '100%' : 'auto',
      backgroundColor: theme.colors.WHITE,
      borderColor: theme.colors.GREYSCALE40,
      borderRadius: addBorders ? theme.roundness : 0,
    },
  });
