import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import DayCard from '../../components/Card/DayCard/DayCard.view';
import SubjectCard from '../../components/Card/SubjectCard/SubjectCard.view';
import Text, {TextVariants} from '../../components/Text/Text.view';
import WeekSelector from '../../components/WeekSelector/WeekSelector.view';
import {Strings} from '../../constants/strings';
import {TimetableData} from '../../data';
import {getCurrentDay} from '../../redux/Selectors';
import {getCurrentWeekDetails} from '../../utils';
import styles from './TimeTable.styles';

interface TimeTableProps {}

const Spacer = () => <View style={styles.spacer} />;

/**  */
const TimeTable: React.FC<TimeTableProps> = props => {
  const {} = props;

  const currentDay = useSelector(getCurrentDay);
  const {daysOfWeek} = getCurrentWeekDetails(currentDay);

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

      <FlatList
        data={TimetableData[0]}
        ItemSeparatorComponent={Spacer}
        renderItem={({item}) => <SubjectCard {...item} />}
      />
    </View>
  );
};

export default TimeTable;
