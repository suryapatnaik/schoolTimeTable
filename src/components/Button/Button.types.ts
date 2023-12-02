import {ButtonProps} from 'react-native';

export enum ButtonVariants {
  filled = 'filled',
  text = 'text',
}

export interface ButtonComponentProps extends ButtonProps {
  variant: ButtonVariants;
}
