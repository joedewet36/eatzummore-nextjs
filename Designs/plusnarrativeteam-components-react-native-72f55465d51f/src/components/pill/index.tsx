import React, { useCallback, useState, useMemo } from 'react';
import { TextStyle, ViewStyle, TouchableWithoutFeedback, View } from 'react-native';

import Typography from '@plus-components/components/typography';

import { useTheme } from '@plus-components/theme/ThemeProvider';
import style from './styles';

export type ToggleEvent = {
  name: string;
  active: boolean;
};

type Props = {
  /** Name used to identify the pill, think name field in an HTML input */
  name: string;
  /** If true, will show the pill in the active state */
  active?: boolean;
  /** Called when pill active state is toggled */
  onToggle?: (event: ToggleEvent) => void;
  /** Text to be displayed in the pill */
  label: string & React.ReactNode;
  /** Size on the pill */
  size?: 'default' | 'small';
  /** Should the pill be disabled? */
  disabled?: boolean;
  /** Specify text styling */
  textStyle?: TextStyle;
  /** Container Styling */
  containerStyle?: ViewStyle;
  /** Icon to show on the pill */
  icon?: React.ReactElement;
};

const Pill: React.FC<Props> = props => {
  const {
    name,
    label,
    active = false,
    onToggle = null,
    size = 'default',
    disabled = false,
    icon = null,
    textStyle,
    containerStyle,
  } = props;
  const [activeState, setActiveState] = useState<boolean>(active);
  const theme = useTheme();

  const styles = useMemo(() => style(theme, activeState, size), [theme, activeState, size]);
  const handleToggle = useCallback(() => {
    if (disabled) return;
    const invertedState = !activeState;
    setActiveState(invertedState);
    if (onToggle) onToggle({ name, active: invertedState });
  }, [disabled, activeState, onToggle, name]);
  const fondVariant = size === 'default' ? 'BODY2_BOLD' : 'BODY3_REGULAR';
  return (
    <TouchableWithoutFeedback onPress={handleToggle}>
      <View style={[styles.container, containerStyle]}>
        <Typography style={[styles.label, textStyle]} variant={fondVariant}>
          <>
            {label}
            {icon && '  '}
            {icon}
          </>
        </Typography>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Pill;
