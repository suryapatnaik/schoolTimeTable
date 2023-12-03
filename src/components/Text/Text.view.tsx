import React from 'react';
import {Text as RNText, StyleProp, TextProps, TextStyle} from 'react-native';
import COLORS from '../../constants/colors';
import styles from './Text.style';

/** controls font size and family */
export type TextVariants = 'Header1' | 'Header2' | 'Header3' | 'Header4';

interface CTextProps extends TextProps {
  variant?:
    | 'Header1'
    | 'Header2'
    | 'Header3'
    | 'Header4'
    | 'Header5'
    | 'Header6';
  color?: COLORS;
  textProps?: TextProps;
}

const Text = (props: CTextProps) => {
  const {children, textProps, variant = 'Header1', color} = props;

  let textStyle: StyleProp<TextStyle>;

  switch (variant) {
    case 'Header1':
      textStyle = styles.header1;
      break;
    case 'Header2':
      textStyle = styles.header2;
      break;
    case 'Header3':
      textStyle = styles.header3;
      break;
    case 'Header4':
      textStyle = styles.header4;
      break;
    case 'Header5':
      textStyle = styles.header5;
      break;
    case 'Header6':
      textStyle = styles.header6;
      break;
    default:
      textStyle = styles.header1;
  }

  return (
    <RNText {...textProps} style={[textStyle, color ? {color} : {}]}>
      {children}
    </RNText>
  );
};

export default Text;
