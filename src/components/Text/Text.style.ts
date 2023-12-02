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
});

export default styles;
