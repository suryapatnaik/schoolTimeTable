import React from 'react';
import {Text as RNText, StyleProp, TextStyle} from 'react-native';
import COLORS from '../../constants/colors';
import styles from './Text.style';
import {TextProps} from './Text.types';

/** controls font size and family */
export enum TextVariants {
  Header1 = 'Header1',
  Header2 = 'Header2',
  Header3 = 'Header3',
  Header4 = 'Header4',
}

interface CTextProps extends TextProps {
  variant: TextVariants;
  color?: COLORS;
  textProps?: TextProps;
}

const Text = (props: CTextProps) => {
  const {children, textProps, variant, color} = props;

  let textStyle: StyleProp<TextStyle>;

  switch (variant) {
    case TextVariants.Header1:
      textStyle = styles.header1;
      break;
    case TextVariants.Header2:
      textStyle = styles.header2;
      break;
    case TextVariants.Header3:
      textStyle = styles.header3;
      break;
    case TextVariants.Header4:
      textStyle = styles.header4;
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
