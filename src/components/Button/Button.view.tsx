import React from 'react';
import {TextProps, TouchableOpacity} from 'react-native';
import COLORS from '../../constants/colors';
import Text from '../Text/Text.view';
import styles from './Button.styles';

export type ButtonVariants = 'filled' | 'text' | 'disabled';

export interface ButtonComponentProps {
  variant: ButtonVariants;
  textProps?: TextProps;
  title: string;
  onPress: () => void;
}

const Button = (props: ButtonComponentProps) => {
  const {title, variant = 'filled', onPress} = props;

  switch (variant) {
    case 'filled':
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPress}
          style={styles.filledButtonContainer}>
          <Text
            variant="Header4"
            {...props.textProps}
            style={styles.filledButtonText}
            color={COLORS.white}>
            {title}
          </Text>
        </TouchableOpacity>
      );
    case 'disabled':
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPress}
          disabled={true}
          style={styles.disabledButtonContainer}>
          <Text
            variant="Header4"
            {...props.textProps}
            style={styles.filledButtonText}
            color={COLORS.white}>
            {title}
          </Text>
        </TouchableOpacity>
      );
    case 'text':
      return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.linkButton}
          activeOpacity={0.6}>
          <Text
            variant="Header4"
            {...props.textProps}
            color={COLORS.primaryBlue}
            style={styles.buttonText}>
            {title}
          </Text>
        </TouchableOpacity>
      );
  }
};

export default Button;
