import { SafeAreaView, View, Text } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import React, { useMemo, useRef, useState } from 'react';
import { useTheme } from '@plus-components/theme/ThemeProvider';
import Typography from '../typography';
import Style from './styles';

const PhoneNumber: React.FC<{
  label: string;
  placeHolder: string;
}> = ({ label, placeHolder }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
  const theme = useTheme();
  const [state] = useState<'normal' | 'errored' | 'focused' | 'disabled'>('normal');
  const styles = useMemo(() => Style(theme, state), [theme, state]);

  return (
    <SafeAreaView style={styles.container}>
      <Typography variant="SUBTITLE_BOLD">{label}</Typography>
      <View style={styles.inputContainer}>
        <PhoneInput
          codeTextStyle={styles.text}
          textInputStyle={styles.text}
          countryPickerButtonStyle={styles.textButtonInput}
          ref={phoneInput}
          value={phoneNumber}
          defaultCode="ZA"
          layout="first"
          placeholder={placeHolder}
          autoFocus
          containerStyle={styles.inputContainer}
          textContainerStyle={styles.textInput}
          onChangeFormattedText={text => {
            setPhoneNumber(text);
          }}
        />
      </View>
      <Typography style={styles.lowerText} variant="BODY2_REGULAR">
        <Text>If you continue, you may receive an SMS for</Text>
        <Text>verification. Message and data rates apply.</Text>
      </Typography>
    </SafeAreaView>
  );
};

export default PhoneNumber;
