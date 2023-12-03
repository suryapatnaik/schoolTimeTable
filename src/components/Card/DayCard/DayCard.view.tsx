import moment from 'moment';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import COLORS from '../../../constants/colors';
import Text from '../../Text/Text.view';
import styles from './DayCard.styles';

interface DayCardProps {
  isSelected: boolean;
  date: string;
  onPress: () => void;
}

const DayCard = (props: DayCardProps) => {
  const {isSelected, date, onPress} = props;

  const isTodaysDate = moment(props.date).isSame(moment(), 'day');

  return (
    <TouchableOpacity onPress={onPress} style={styles.main}>
      <View style={isSelected ? styles.selectedContainer : styles.container}>
        <Text
          variant="Header5"
          color={isSelected ? COLORS.white : COLORS.black}>
          {moment(date).format('ddd')}
        </Text>
        <View
          style={
            isSelected ? styles.selectedDayContainer : styles.dayContainer
          }>
          <Text
            variant="Header5"
            color={isSelected ? COLORS.primaryBlue : COLORS.black}>
            {moment(date).format('DD')}
          </Text>
        </View>
      </View>
      {isTodaysDate ? <View style={styles.marker} /> : null}
    </TouchableOpacity>
  );
};

export default DayCard;
