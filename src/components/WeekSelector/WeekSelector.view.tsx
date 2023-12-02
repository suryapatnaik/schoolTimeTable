import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import ArrowIcon from '../../assets/icons/ArrowIcon';
import {getCurrentDay} from '../../redux/Selectors';
import {getCurrentWeekDetails} from '../../utils';
import Text, {TextVariants} from '../Text/Text.view';
import styles from './WeekSelector.styles';

interface WeekSelectorProps {}

/**  */
const WeekSelector: React.FC<WeekSelectorProps> = props => {
  const {} = props;

  const currentDay = useSelector(getCurrentDay);
  const {daysOfWeek, weekTitle} = getCurrentWeekDetails(currentDay);
  console.log(daysOfWeek);

  const onPressNext = () => {};

  const onPressPrevious = () => {};

  const onPressSelectWeek = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftButton} onPress={onPressPrevious}>
        <ArrowIcon height={30} width={30} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.currentWeek}
        onPress={onPressSelectWeek}>
        <Text variant={TextVariants.Header3}>{weekTitle}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rightButton} onPress={onPressNext}>
        <ArrowIcon height={30} width={30} variant="right" />
      </TouchableOpacity>
    </View>
  );
};

export default WeekSelector;
