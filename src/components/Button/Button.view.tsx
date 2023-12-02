import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../Text/Text.view';
import styles from './Button.styles';
import {ButtonComponentProps, ButtonVariants} from './Button.types';

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
      return (
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      );
  }
};

export default Button;
