import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  filledButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: COLORS.primaryBlue,
  },
  filledButtonText: {
    color: COLORS.white,
    fontSize: 12,
  },
  buttonText: {
    color: COLORS.primaryBlue,
    fontSize: 12,
  },
});

export default styles;
