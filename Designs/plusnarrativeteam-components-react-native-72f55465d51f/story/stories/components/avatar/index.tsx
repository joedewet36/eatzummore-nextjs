import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { text, select } from '@storybook/addon-knobs';

import Avatar from '@plus-components/components/avatar';

import styles from './styles';

const options: Array<'small' | 'medium' | 'large'> = ['small', 'medium', 'large'];
storiesOf('Components', module).add('avatar', () => (
  <View style={styles.container}>
    <Avatar
      size={select('Size', options, 'medium')}
      imageUrl={text(
        'Image URL',
        'https://media.istockphoto.com/photos/headshot-portrait-of-happy-mid-adult-hispanic-businessman-picture-id1183945946?k=20&m=1183945946&s=170667a&w=0&h=MlSx79VWXqfsnqsgo0AiZwITmQkP7t4YE5ZZxvLaKc0=',
      )}
    />
  </View>
));
