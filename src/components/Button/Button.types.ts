import {ButtonProps} from 'react-native';
import {TextProps} from '../Text/Text.types';

export enum ButtonVariants {
  filled = 'filled',
  text = 'text',
}

export interface ButtonComponentProps extends ButtonProps {
  variant: ButtonVariants;
  textProps: TextProps;
}
