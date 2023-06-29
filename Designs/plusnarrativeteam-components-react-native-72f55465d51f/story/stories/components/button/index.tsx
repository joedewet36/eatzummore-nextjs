import React from 'react';
import { View, Alert } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { storiesOf } from '@storybook/react-native';
import { text, select, boolean } from '@storybook/addon-knobs';

import Button from '@plus-components/components/button';
import styles from './styles';

const options: Array<'primary' | 'secondary' | 'outline' | 'danger'> = ['primary', 'secondary', 'outline', 'danger'];
const onPress = () => {
  Alert.alert('Button pressed', 'You pressed a button... yay 😒!!!', [{ text: 'OK', onPress: () => null }]);
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const rightIcon = <Ionicons name="lock-open-outline" size={16} />;

const StoryComponent: React.FC<{
  label: string;
  disabled: boolean;
  variant: 'primary' | 'secondary' | 'outline' | 'danger';
}> = ({ label, disabled, variant }) => {
  return (
    <>
      <Button onPress={onPress} label={label} variant={variant} disabled={disabled} />
      <View style={styles.spacer} />
      <Button
        onPress={onPress}
        rightLabel={text('Right Label', 'R 15.99')}
        label={label}
        variant={variant}
        disabled={disabled}
      />
      <View style={styles.spacer} />
      <Button onPress={onPress} label={label} variant={variant} disabled={disabled} rightIcon={rightIcon} />
    </>
  );
};

storiesOf('Components', module).add('button', () => (
  <View style={styles.container}>
    <StoryComponent
      label={text('Label', 'Sign in')}
      disabled={boolean('Disabled', false)}
      variant={select('Variant', options, 'primary')}
    />
  </View>
));
