import React from 'react';
import {Text as RNText} from 'react-native';
import {TextProps} from './Text.types';

const Text = (props: TextProps) => {
  const {children, ...rest} = props;
  return <RNText {...rest}>{children}</RNText>;
};

export default Text;
