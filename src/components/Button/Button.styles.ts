import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  filledButtonContainer: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLORS.primaryBlue,
  },
  filledButtonText: {
    color: COLORS.white,
  },
  buttonText: {
    color: COLORS.primaryBlue,
  },
});

export default styles;