import React from 'react';
import { SafeAreaView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { text, select } from '@storybook/addon-knobs';

import { TypographyVariant } from '@plus-components/types/theme';
import Typography from '@plus-components/components/typography';
import styles from './styles';

const options: Array<TypographyVariant> = [
  'H1',
  'H2',
  'H3',
  'H4',
  'SUBTITLE_LIGHT',
  'SUBTITLE_BOLD',
  'SUBTITLE_LIGHT_UPPER',
  'SUBTITLE_BOLD_UPPER',
  'BODY_REGULAR',
  'BODY_BOLD',
  'BODY2_REGULAR',
  'BODY2_BOLD',
  'BODY3_REGULAR',
  'BODY3_BOLD',
];
storiesOf('Components', module).add('typography', () => (
  <SafeAreaView style={styles.container}>
    <Typography variant={select<TypographyVariant>('Variant', options, 'H1')} style={styles.text}>
      {text('Text', 'I am a cool Typography')}
    </Typography>
  </SafeAreaView>
));
