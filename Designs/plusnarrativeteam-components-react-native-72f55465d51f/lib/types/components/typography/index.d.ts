import React from 'react';
import { TextProps } from 'react-native';
import { TypographyVariant } from '@plus-components/types/theme';
interface Props extends TextProps {
    /** Font variant to use. Required */
    variant: TypographyVariant;
}
declare const Typography: React.FC<Props>;
export default Typography;
