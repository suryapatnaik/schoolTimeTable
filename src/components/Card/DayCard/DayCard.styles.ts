import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.grey100,
    padding: 12,
    borderRadius: 48,
  },
  selectedContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.primaryBlue,
    padding: 12,
    borderRadius: 48,
  },
  dayContainer: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  selectedDayContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 80,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  marker: {
    borderRadius: 8,
    width: 8,
    height: 8,
    marginTop: 12,
    backgroundColor: COLORS.primaryBlue,
  },
  blankMarker: {
    borderRadius: 8,
    width: 8,
    height: 8,
    marginTop: 12,
  },
});

export default styles;
