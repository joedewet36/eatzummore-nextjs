import React from 'react';
import { View, KeyboardTypeOptions, Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { text, select, boolean } from '@storybook/addon-knobs';

import TextInput from '@plus-components/components/textInput';
import styles from './styles';

const inputTypes: Array<KeyboardTypeOptions> = [
  'default',
  'number-pad',
  'decimal-pad',
  'numeric',
  'email-address',
  'phone-pad',
  'url',
];

const onExplain = () => {
  Alert.alert('What is this?', 'This is an input and the input does input things', [
    { text: 'OK', onPress: () => null },
  ]);
};
storiesOf('Components', module).add('textInput', () => (
  <View style={styles.container}>
    <TextInput
      onExplain={onExplain}
      error={text('Error', '')}
      required={boolean('Required', false)}
      editable={boolean('Editable', true)}
      label={text('Label', 'Email address')}
      placeholder={text('Placeholder', 'Login email address')}
      keyboardType={select('Keyboard Type', inputTypes, 'default')}
    />
  </View>
));
