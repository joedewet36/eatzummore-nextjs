import React from 'react';
import { SafeAreaView as RNSafeAreaView, ViewProps, StyleSheet } from 'react-native';

import styles from './styles';

const SafeAreaView: React.FC<ViewProps> = props => {
  const { style = {}, children, ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <RNSafeAreaView style={StyleSheet.compose(style, styles.container)} {...rest}>
      {children}
    </RNSafeAreaView>
  );
};

export default SafeAreaView;
