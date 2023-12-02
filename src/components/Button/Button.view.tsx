import {ButtonProps, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Button.styles';
import Text from '../Text/Text.view';

export enum ButtonVariants {
  filled = 'filled',
  text = 'text',
}

interface ButtonComponentProps extends ButtonProps {
  variant: ButtonVariants;
}

const Button = (props: ButtonComponentProps) => {
  const {title, variant = ButtonVariants.filled, onPress} = props;
  switch (variant) {
    case ButtonVariants.filled:
      return (
        <TouchableOpacity
          onPress={onPress}
          style={styles.filledButtonContainer}>
          <Text style={styles.filledButtonText}>{title}</Text>
        </TouchableOpacity>
      );
    case ButtonVariants.text:
      return <Text style={styles.buttonText}>{title}</Text>;
  }
};

export default Button;
