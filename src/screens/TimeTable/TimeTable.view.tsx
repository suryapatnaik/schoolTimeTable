import React from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import DayCard from '../../components/Card/DayCard/DayCard';
import Text, {TextVariants} from '../../components/Text/Text.view';
import WeekSelector from '../../components/WeekSelector/WeekSelector.view';
import {Strings} from '../../constants/strings';
import {getCurrentDay} from '../../redux/Selectors';
import {getCurrentWeekDetails} from '../../utils';
import styles from './TimeTable.styles';

interface TimeTableProps {}

/**  */
const TimeTable: React.FC<TimeTableProps> = props => {
  const {} = props;

  const currentDay = useSelector(getCurrentDay);
  const {daysOfWeek, weekTitle} = getCurrentWeekDetails(currentDay);

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text variant={TextVariants.Header1}>{Strings.timeTable}</Text>
      </View>

      <WeekSelector />

      <View style={styles.weekDaysView}>
        {daysOfWeek.map(item => (
          <DayCard
            date={item}
            isSelected={item === '2023-12-02'}
            onPress={() => {}}
          />
        ))}
      </View>
    </View>
  );
};

export default TimeTable;
