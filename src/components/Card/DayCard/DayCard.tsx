import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Text, {TextVariants} from '../../Text/Text.view';
import {DayCardProps} from './DayCard.types';
import moment from 'moment';
import styles from './DayCard.styles';
import COLORS from '../../../constants/colors';

const DayCard = (props: DayCardProps) => {
  const isTodaysDate = moment(props.date).isSame(moment(), 'day');
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.main}>
        <View
          style={
            props.isSelected ? styles.selectedContainer : styles.container
          }>
          <Text
            variant={TextVariants.Header3}
            color={props.isSelected ? COLORS.white : COLORS.black}>
            {moment(props.date).format('ddd')}
          </Text>
          <View
            style={
              props.isSelected
                ? styles.selectedDayContainer
                : styles.dayContainer
            }>
            <Text
              variant={TextVariants.Header3}
              color={props.isSelected ? COLORS.primaryBlue : COLORS.black}>
              {moment(props.date).format('DD')}
            </Text>
          </View>
        </View>
        {isTodaysDate ? <View style={styles.marker} /> : null}
      </View>
    </TouchableOpacity>
  );
};

export default DayCard;
