import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const FONT_FAMILY = 'Sans-serif';

const styles = StyleSheet.create({
  header1: {
    fontFamily: FONT_FAMILY,
    fontSize: 32,
    fontWeight: '600',
    color: COLORS.darkBlue,
  },
  header2: {
    fontFamily: FONT_FAMILY,
    fontSize: 24,
    fontWeight: '400',
    color: COLORS.darkBlue,
  },
  header3: {
    fontFamily: FONT_FAMILY,
    fontSize: 16,
    fontWeight: '300',
    color: COLORS.darkBlue,
  },
  header4: {
    fontFamily: FONT_FAMILY,
    fontSize: 12,
    fontWeight: '200',
    color: COLORS.darkBlue,
  },
});

export default styles;
