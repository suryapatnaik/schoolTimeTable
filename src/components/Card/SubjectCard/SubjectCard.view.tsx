import React from 'react';
import {View} from 'react-native';
import {MockDataType} from '../../../api/MockData';
import BreakIcon from '../../../assets/icons/BreakIcon';
import ClockIcon from '../../../assets/icons/ClockIcon';
import LunchIcon from '../../../assets/icons/LunchIcon';
import Text from '../../Text/Text.view';
import styles from './SubjectCard.styles';

export interface SubjectCardProps extends MockDataType {}

const getSubjectIcon = (subjectName: string) => {
  switch (subjectName) {
    case 'Lunch Break':
      return <LunchIcon height={18} width={18} />;
    case 'Break':
      return <BreakIcon height={18} width={18} />;
    default:
      return null;
  }
};

const SubjectCard = (props: SubjectCardProps) => {
  const {backgroundColor, endTime, isBreak, startTime, subjectName} = props;

  const SubjectIcon = getSubjectIcon(subjectName);

  return (
    <View
      style={[
        styles.container,
        {borderColor: backgroundColor, backgroundColor: `${backgroundColor}44`},
        isBreak ? styles.breakSubjectView : {},
      ]}>
      <View style={styles.subjectContainer}>
        {SubjectIcon ? (
          <View style={styles.subjectIcon}>{SubjectIcon}</View>
        ) : null}
        <Text variant="Header5">{subjectName}</Text>
      </View>

      <View style={styles.timesView}>
        <ClockIcon height={20} width={20} style={styles.clockIcon} />
        <Text variant="Header6">{startTime}</Text>
        <Text variant="Header6">{' - '}</Text>
        <Text variant="Header6">{endTime}</Text>
      </View>
    </View>
  );
};

export default SubjectCard;
