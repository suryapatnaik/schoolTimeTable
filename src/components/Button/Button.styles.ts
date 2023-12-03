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
  disabledButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    opacity: 0.8,
    backgroundColor: COLORS.grey300,
  },
  filledButtonText: {
    color: COLORS.primaryBlue,
    fontSize: 12,
  },
  buttonText: {
    color: COLORS.primaryBlue,
    fontWeight: '500',
  },
  linkButton: {
    alignItems: 'center',
    height: 30,
  },
});

export default styles;
