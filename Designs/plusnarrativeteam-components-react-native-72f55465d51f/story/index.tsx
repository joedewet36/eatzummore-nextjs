import React from 'react';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import SafeAreaView from '@plus-components/components/safeAreaView';

import './rn-addons';

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  // eslint-disable-next-line global-require
  require('./stories');
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  // eslint-disable-next-line global-require,@typescript-eslint/no-var-requires
  asyncStorage: require('@react-native-async-storage/async-storage').default,
});

export default () => (
  <SafeAreaView>
    <StorybookUIRoot />
  </SafeAreaView>
);
