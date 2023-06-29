import React from 'react';
import { ImageBackgroundProps } from 'react-native';
interface Props extends ImageBackgroundProps {
    /** Avatar size. Defaults to 'medium' */
    size?: 'small' | 'medium' | 'large';
    /** Image url to show on avatar */
    imageUrl?: string;
}
declare const Avatar: React.FC<Props>;
export default Avatar;
