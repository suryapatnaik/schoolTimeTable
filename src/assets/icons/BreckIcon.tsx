import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const BreakIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      fill="#080341"
      fillRule="evenodd"
      d="M19.5 12a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm1.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.375 10.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Zm6.375-1.125a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 15c-1.822 0-3-1.155-3-2.25H7.5c0 2.219 2.18 3.75 4.5 3.75s4.5-1.531 4.5-3.75H15c0 1.095-1.178 2.25-3 2.25Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default BreakIcon;
