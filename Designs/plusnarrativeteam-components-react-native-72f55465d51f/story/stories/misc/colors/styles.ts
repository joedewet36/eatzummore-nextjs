import { StyleSheet } from 'react-native';

import { Colors } from '@plus-components/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  colorBlock: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.WHITE,
  },
});
