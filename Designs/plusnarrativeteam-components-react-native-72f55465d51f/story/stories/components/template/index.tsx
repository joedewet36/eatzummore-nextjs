import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import Template from '@plus-components/components/template';

storiesOf('Components', module).add('simple', () => <Template text={text('text', 'I is simple')} />);
