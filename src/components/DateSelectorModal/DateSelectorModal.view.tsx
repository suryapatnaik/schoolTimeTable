import moment from 'moment';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Calendar, DateData} from 'react-native-calendars';
import {Theme} from 'react-native-calendars/src/types';
import ReactNativeModal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import COLORS from '../../constants/colors';
import {FONTS} from '../../constants/common';
import {Strings} from '../../constants/strings';
import {getCurrentDay} from '../../redux/Selectors';
import {setCurrentDate} from '../../redux/reducers/TimeTable.reducer';
import {getCurrentWeekDetails} from '../../utils';
import Button from '../Button/Button.view';
import Text from '../Text/Text.view';
import styles from './DateSelectorModal.styles';

interface DateSelectorModalProps {
  closeModal: () => void;
}

const calendarTheme: Theme = {
  textDayFontFamily: FONTS.InterRegular,
  textMonthFontFamily: FONTS.InterMedium,
  textDayHeaderFontFamily: FONTS.InterMedium,
  textDayFontSize: 18,
  textMonthFontSize: 18,
  textDayHeaderFontSize: 14,
  todayBackgroundColor: COLORS.primaryBlue,
  todayTextColor: COLORS.white,
  todayButtonFontFamily: FONTS.InterBold,
};

/**  */
const DateSelectorModal: React.FC<DateSelectorModalProps> = props => {
  const {closeModal} = props;

  const currentDate = useSelector(getCurrentDay);
  const dispatch = useDispatch();
  const weekDetails = getCurrentWeekDetails(currentDate);

  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [allowSubmit, setAllowSubmit] = useState(false);

  const onPressToday = () => {
    setSelectedDate(moment().format('YYYY-MM-DD'));
  };

  const onPressCancel = () => {
    closeModal();
  };

  const onSelectDate = (day: DateData) => {
    const {dateString} = day;

    const isSunday = moment(dateString).day() === 0;

    if (isSunday) {
      setAllowSubmit(false);
    } else {
      setAllowSubmit(true);
    }
    setSelectedDate(day.dateString);
  };

  const onPressApply = () => {
    dispatch(setCurrentDate(selectedDate));
    closeModal();
  };

  return (
    <ReactNativeModal
      isVisible={true}
      onDismiss={closeModal}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      animationIn={'slideInUp'}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text variant="Header4">{weekDetails.weekTitle}</Text>
          <Button title={Strings.today} variant="text" onPress={onPressToday} />
        </View>

        <Calendar
          style={styles.calendar}
          onDayPress={onSelectDate}
          current={currentDate}
          enableSwipeMonths={true}
          markedDates={{
            [selectedDate]: {selected: true},
          }}
          theme={calendarTheme}
        />

        <View style={styles.spacer1} />
        <Button
          title={Strings.apply}
          variant={allowSubmit ? 'filled' : 'disabled'}
          onPress={onPressApply}
        />

        <View style={styles.spacer1} />
        <Button title={Strings.cancel} variant="text" onPress={onPressCancel} />
      </View>
    </ReactNativeModal>
  );
};

export default DateSelectorModal;
