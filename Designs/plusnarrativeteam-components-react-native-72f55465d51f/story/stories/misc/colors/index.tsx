import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { Colors } from '@plus-components/theme';
import styles from './styles';

const ColorView: React.FC = () => {
  const colors = Object.keys(Colors);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {colors.map(colorKey => (
        <View key={colorKey} style={[styles.colorBlock, { backgroundColor: Colors[colorKey] }]}>
          <Text style={[styles.text, ['WHITE', 'GREYSCALE20'].includes(colorKey) && { color: Colors.GREYSCALE100 }]}>
            {colorKey}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

storiesOf('Misc', module).add('colors', () => <ColorView />);
