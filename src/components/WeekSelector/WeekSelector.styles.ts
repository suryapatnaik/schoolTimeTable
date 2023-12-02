import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.grey200,
    borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  leftButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 50,
  },
  rightButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: '100%',
  },
  currentWeek: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: COLORS.grey200,
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
