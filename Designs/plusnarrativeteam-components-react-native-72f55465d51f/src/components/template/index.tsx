import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import Styles from './styles';

type Props = {
  /**
   * Some cool test to show.
   */
  text: string;
};

const Template: React.FC<Props> = props => {
  const { text } = props;
  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.text}>{text}</Text>
    </SafeAreaView>
  );
};

export default Template;
