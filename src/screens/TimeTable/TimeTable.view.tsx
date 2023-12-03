import React from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import {MockData} from '../../api/MockData';
import DayCard from '../../components/Card/DayCard/DayCard.view';
import SubjectCard from '../../components/Card/SubjectCard/SubjectCard.view';
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

      <ScrollView
        horizontal={true}
        decelerationRate={0}
        pagingEnabled={true}
        snapToInterval={Dimensions.get('screen').width * 0.82}
        scrollEventThrottle={16}
        onScroll={event => {
          const scrollDistance = event.nativeEvent.contentOffset.x;
          const viewWidth = (Dimensions.get('screen').width * 0.78).toFixed(2);
          const pagesScrolled = (
            scrollDistance / parseInt(viewWidth, 10) +
            1
          ).toFixed(0);

          console.log(viewWidth, '----------------View width');

          console.log(
            '--Scroll distance : ',
            scrollDistance.toFixed(2),
            '--Pages scrolled : ',
            pagesScrolled,
          );
        }}
        snapToAlignment="center">
        {MockData.map(data => (
          <ScrollView
            contentContainerStyle={styles.subjectsListContainer}
            showsVerticalScrollIndicator={false}>
            {data.map(subject => (
              <SubjectCard {...subject} key={subject.startTime} />
            ))}
          </ScrollView>
        ))}
      </ScrollView>
    </View>
  );
};

export default TimeTable;
