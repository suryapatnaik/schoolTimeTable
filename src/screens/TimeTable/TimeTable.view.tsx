import React, {useRef, useState} from 'react';
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
  const [currentPage, setCurrentPage] = useState('1');

  const scrollRef: React.LegacyRef<ScrollView> = useRef(null);

  const selectDate = (index: number) => {
    setCurrentPage((index + 1).toString());
    scrollRef.current?.scrollTo({
      x: Dimensions.get('screen').width * 0.78 * index,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text variant={TextVariants.Header1}>{Strings.timeTable}</Text>
      </View>

      <WeekSelector />

      <View style={styles.weekDaysView}>
        {daysOfWeek.map((item, index) => (
          <DayCard
            key={index}
            date={item}
            isSelected={(index + 1).toString() === currentPage}
            onPress={() => selectDate(index)}
          />
        ))}
      </View>

      <ScrollView
        ref={scrollRef}
        horizontal={true}
        decelerationRate={0}
        pagingEnabled={true}
        snapToInterval={Dimensions.get('screen').width * 0.82}
        scrollEventThrottle={16}
        onMomentumScrollEnd={event => {
          const scrollDistance = event.nativeEvent.contentOffset.x;
          const viewWidth = (Dimensions.get('screen').width * 0.78).toFixed(2);
          const pagesScrolled = (
            scrollDistance / parseInt(viewWidth, 10) +
            1
          ).toFixed(0);

          if (pagesScrolled !== currentPage) {
            setCurrentPage(pagesScrolled);
          }

          // console.log(viewWidth, '----------------View width');

          // console.log(
          //   '--Scroll distance : ',
          //   scrollDistance.toFixed(2),
          //   '--Pages scrolled : ',
          //   pagesScrolled,
          // );
        }}
        snapToAlignment="center">
        {MockData.map((data, index) => (
          <ScrollView
            key={`${index}${Math.random()}`}
            contentContainerStyle={styles.subjectsListContainer}
            showsVerticalScrollIndicator={false}>
            {data.map(subject => (
              <SubjectCard
                {...subject}
                key={`${subject.startTime}${subject.backgroundColor}`}
              />
            ))}
          </ScrollView>
        ))}
      </ScrollView>
    </View>
  );
};

export default TimeTable;
