import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import {getCurrentDay} from '../../redux/Selectors';
import {setCurrentDate} from '../../redux/reducers/TimeTable.reducer';
import {
  getCurrentWeekDetails,
  getNextWeeksFirstDay,
  getPreviousWeeksFirstDay,
} from '../../utils';
import Text from '../Text/Text.view';
import styles from './WeekSelector.styles';

interface WeekSelectorProps {
  openDateSelector: () => void;
}

/**  */
const WeekSelector: React.FC<WeekSelectorProps> = props => {
  const {openDateSelector} = props;

  const currentDay = useSelector(getCurrentDay);
  const weekDetails = getCurrentWeekDetails(currentDay);
  const dispatch = useDispatch();

  const onPressNext = () => {
    const nextWeeksFirstDay = getNextWeeksFirstDay(currentDay);
    dispatch(setCurrentDate(nextWeeksFirstDay));
  };

  const onPressPrevious = () => {
    const previousWeeksFirstDay = getPreviousWeeksFirstDay(currentDay);
    dispatch(setCurrentDate(previousWeeksFirstDay));
  };

  const onPressSelectWeek = () => {
    openDateSelector();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftButton} onPress={onPressPrevious}>
        <ArrowIcon height={30} width={30} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.currentWeek}
        onPress={onPressSelectWeek}>
        <Text variant="Header4">{weekDetails.weekTitle}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rightButton} onPress={onPressNext}>
        <ArrowIcon height={30} width={30} variant="right" />
      </TouchableOpacity>
    </View>
  );
};

export default WeekSelector;
