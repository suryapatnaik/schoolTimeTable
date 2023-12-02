import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: (bgColor: string, borderColor: string, isBreak: Boolean) => ({
    padding: 24,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: borderColor,
    backgroundColor: bgColor,
    opacity: isBreak ? 0.8 : 1,
  }),
  subjectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timesView: {
    flexDirection: 'row',
  },
});

export default styles;
