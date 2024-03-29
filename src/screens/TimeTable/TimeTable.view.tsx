import React, {useRef, useState} from 'react';
import {Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import DayCard from '../../components/Card/DayCard/DayCard.view';
import SubjectCard from '../../components/Card/SubjectCard/SubjectCard.view';
import DateSelectorModal from '../../components/DateSelectorModal/DateSelectorModal.view';
import Text from '../../components/Text/Text.view';
import WeekSelector from '../../components/WeekSelector/WeekSelector.view';
import {Strings} from '../../constants/strings';
import {getCurrentDay, getWeeksTimeTable} from '../../redux/Selectors';
import {getCurrentWeekDetails} from '../../utils';
import styles from './TimeTable.styles';

interface TimeTableProps {}

/**  */
const TimeTable: React.FC<TimeTableProps> = props => {
  const {} = props;

  const currentDay = useSelector(getCurrentDay);
  const timeTableData = useSelector(getWeeksTimeTable);

  const {daysOfWeek} = getCurrentWeekDetails(currentDay);
  const [currentPage, setCurrentPage] = useState('1');
  const [showDateSelectorModal, setShowDateSelectorModal] = useState(false);

  const scrollRef: React.LegacyRef<ScrollView> = useRef(null);

  const onSelectDate = (index: number) => {
    setCurrentPage((index + 1).toString());
    scrollRef.current?.scrollTo({
      x: Dimensions.get('screen').width * 0.78 * index,
      animated: true,
    });
  };

  const openDateSelectorModal = () => {
    setShowDateSelectorModal(true);
  };

  const closeDateSelectorModal = () => {
    setShowDateSelectorModal(false);
  };

  const handleScrollEvent = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollDistance = event.nativeEvent.contentOffset.x;
    const viewWidth = (Dimensions.get('screen').width * 0.78).toFixed(2);
    const pagesScrolled = (
      scrollDistance / parseInt(viewWidth, 10) +
      1
    ).toFixed(0);

    if (pagesScrolled !== currentPage) {
      setCurrentPage(pagesScrolled);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text variant="Header1">{Strings.timeTable}</Text>
      </View>

      <WeekSelector openDateSelector={openDateSelectorModal} />

      <View style={styles.weekDaysView}>
        {daysOfWeek.map((item, index) => (
          <DayCard
            key={index}
            date={item}
            isSelected={(index + 1).toString() === currentPage}
            onPress={() => onSelectDate(index)}
          />
        ))}
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        horizontal={true}
        decelerationRate={0}
        pagingEnabled={true}
        snapToInterval={Dimensions.get('screen').width * 0.82}
        scrollEventThrottle={16}
        onMomentumScrollEnd={handleScrollEvent}
        snapToAlignment="center">
        {timeTableData.map((data, index) => (
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

      {showDateSelectorModal ? (
        <DateSelectorModal closeModal={closeDateSelectorModal} />
      ) : null}
    </View>
  );
};

export default TimeTable;
