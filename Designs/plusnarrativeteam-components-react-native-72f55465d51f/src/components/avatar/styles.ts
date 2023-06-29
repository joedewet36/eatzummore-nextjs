import { StyleSheet, ImageStyle, ViewStyle } from 'react-native';

import { Theme } from '@plus-components/types/theme';
import avatar from '.';

const selectAvatarSize = (size: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return 48;
    case 'large':
      return 122;
    case 'medium':
    default:
      return 64;
  }
};
export default (theme: Theme, size: 'small' | 'medium' | 'large') => {
  const avatarSize: number = selectAvatarSize(size);
  return StyleSheet.create({
    container: {
      borderWidth: 2,
      width: avatarSize,
      height: avatarSize,
      overflow: 'hidden',
      alignItems: 'center',
      borderRadius: avatarSize,
      justifyContent: 'center',
      backgroundColor: theme.colors.GREYSCALE60,
      borderColor: theme.colors.PRIMARY50,
    },
    imageStyle: {
      width: avatarSize - 2, // Minus border to account for the container border.
      height: avatarSize - 2, // Minus border to account for the container border.
      alignSelf: 'center',
      borderRadius: avatarSize,
    },
  });
};
