import React, { useMemo, useState } from 'react';
import { ImageBackground, ImageBackgroundProps } from 'react-native';
import { useTheme } from '@plus-components/theme/ThemeProvider';
import Styles from './styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultImage = require('../../../assets/avatar_default.png');

interface Props extends ImageBackgroundProps {
  /** Avatar size. Defaults to 'medium' */
  size?: 'small' | 'medium' | 'large';
  /** Image url to show on avatar */
  imageUrl?: string;
}

const Avatar: React.FC<Props> = props => {
  const { size = 'medium', imageUrl = null, source, ...rest } = props;
  const theme = useTheme();
  const styles = Styles(theme, size);
  const [useDefault, setUseDefault] = useState<boolean>(!imageUrl);
  const imgSource = useMemo(() => {
    if (source) return source;
    if (useDefault) return defaultImage;
    return { uri: imageUrl as string };
  }, [useDefault, imageUrl, source]);
  return (
    <ImageBackground
      style={styles.container}
      imageStyle={styles.imageStyle}
      source={imgSource}
      resizeMode="cover"
      onError={() => setUseDefault(true)}
      {...rest}
    />
  );
};

export default Avatar;
