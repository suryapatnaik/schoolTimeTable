import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: 70,
    paddingHorizontal: 24,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 12,
  },
  subjectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timesView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 185,
    justifyContent: 'flex-end',
  },
  clockIcon: {
    marginRight: 5,
  },
  subjectIcon: {
    marginRight: 4,
  },
  breakSubjectView: {
    height: 55,
    borderColor: COLORS.grey200,
    backgroundColor: `${COLORS.grey300}33`,
    opacity: 0.8,
  },
});

export default styles;
