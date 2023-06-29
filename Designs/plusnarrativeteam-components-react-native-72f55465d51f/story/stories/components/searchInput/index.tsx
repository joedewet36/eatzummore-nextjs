import React from 'react';
import { View, KeyboardTypeOptions, Alert } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { text, select, boolean } from '@storybook/addon-knobs';

import SearchInput from '@plus-components/components/searchInput';
import Typography from '@plus-components/components/typography';
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
storiesOf('Components', module).add('searchInput', () => (
  <View style={styles.container}>
    <SearchInput
      onExplain={onExplain}
      errored={boolean('Errored', false)}
      required={boolean('Required', false)}
      editable={boolean('Editable', true)}
      label={text('Label', 'Email address')}
      placeholder={text('Placeholder', 'Search')}
      keyboardType={select('Keyboard Type', inputTypes, 'default')}
    />
    <Typography variant="BODY_BOLD">Hello world</Typography>
  </View>
));
