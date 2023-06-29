import * as React from 'react';
import { storiesOf } from '@storybook/react-native';

import PhoneNumber from '@plus-components/components/phoneNumber';

storiesOf('Components', module).add('phone number', () => (
  <PhoneNumber placeHolder="72 517 8892" label="Enter your mobile number" />
));
