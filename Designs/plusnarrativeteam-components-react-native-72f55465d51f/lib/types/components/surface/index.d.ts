import React from 'react';
import { ViewProps } from 'react-native';
interface Props extends ViewProps {
    /** Add default border style to surface. Defaults to true */
    addBorders?: boolean;
    /** Should surface be full width */
    fullWidth?: boolean;
}
declare const SafeAreaView: React.FC<Props>;
export default SafeAreaView;
