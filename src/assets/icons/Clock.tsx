import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import COLORS from '../../constants/colors';

const ClockIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke={COLORS.grey300}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 7v5l2.5 1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    />
  </Svg>
);
export default ClockIcon;
