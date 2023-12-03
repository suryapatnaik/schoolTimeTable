import React from 'react';
import {View} from 'react-native';
import {MockDataType} from '../../../api/MockData';
import ClockIcon from '../../../assets/icons/ClockIcon';
import Text from '../../Text/Text.view';
import styles from './SubjectCard.styles';

export interface SubjectCardProps extends MockDataType {}

const SubjectCard = (props: SubjectCardProps) => {
  const {
    backgroundColor,
    endTime,
    isBreak,
    startTime,
    subjectName,
    subjectIcon,
  } = props;

  const SubjectIcon = subjectIcon;

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
        <Text variant="Header5">{startTime}</Text>
        <Text variant="Header5">{' - '}</Text>
        <Text variant="Header5">{endTime}</Text>
      </View>
    </View>
  );
};

export default SubjectCard;
