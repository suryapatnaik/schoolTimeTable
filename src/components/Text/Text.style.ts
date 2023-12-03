import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';
import {FONTS} from '../../constants/common';

const styles = StyleSheet.create({
  header1: {
    fontFamily: FONTS.InterBold,
    fontSize: 32,
    fontWeight: '700',
    color: COLORS.darkBlue,
  },
  header2: {
    fontFamily: FONTS.InterBold,
    fontSize: 28,
    fontWeight: '600',
    color: COLORS.darkBlue,
  },
  header3: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: 24,
    fontWeight: '500',
    color: COLORS.darkBlue,
  },
  header4: {
    fontFamily: FONTS.InterMedium,
    fontSize: 20,
    fontWeight: '400',
    color: COLORS.darkBlue,
  },
  header5: {
    fontFamily: FONTS.InterRegular,
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.darkBlue,
  },
  header6: {
    fontFamily: FONTS.InterRegular,
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.darkBlue,
  },
});

export default styles;
