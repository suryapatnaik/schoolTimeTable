import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '100%',
    width: '100%',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  weekDaysView: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  spacer: {
    height: 12,
  },
  subjectsListContainer: {
    width: Dimensions.get('screen').width * 0.78,
    alignSelf: 'center',
    paddingBottom: 30,
    marginHorizontal: 8,
  },
});

export default styles;
