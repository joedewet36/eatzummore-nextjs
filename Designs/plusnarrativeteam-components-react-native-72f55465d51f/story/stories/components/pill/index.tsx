import React from 'react';
import { View, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { storiesOf } from '@storybook/react-native';
import { text, select, boolean } from '@storybook/addon-knobs';
import Pill, { ToggleEvent } from '@plus-components/components/pill';

import styles from './styles';

const onToggle = (event: ToggleEvent) => {
  Alert.alert('Pill toggled', JSON.stringify(event), [{ text: 'OK', onPress: () => null }]);
};
storiesOf('Components', module).add('pill', () => (
  <View style={styles.container}>
    <Pill
      name="pill-story"
      onToggle={onToggle}
      icon={<Ionicons name="fast-food-outline" />}
      label={text('Label', 'Gluten free')}
      disabled={boolean('Disabled?', false)}
      size={select('Size', ['default', 'small'], 'default')}
    />
  </View>
));
