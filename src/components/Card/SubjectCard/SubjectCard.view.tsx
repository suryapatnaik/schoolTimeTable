import moment from 'moment';
import React, {ReactNode} from 'react';
import {ColorValue, View} from 'react-native';
import Text, {TextVariants} from '../../Text/Text.view';
import styles from './SubjectCard.styles';

export interface SubjectCardProps {
  subjectName: String;
  subjectIcon?: ReactNode;
  startTime: string;
  endTime: string;
  backgroundColor: string;
  borderColor: ColorValue;
  isBreak: boolean;
}

const SubjectCard = (props: SubjectCardProps) => {
  const {backgroundColor, endTime, isBreak, startTime, subjectName} = props;

  // const SubjectIcon = subjectIcon;
  return (
    <View
      style={styles.container(
        `${backgroundColor}33`, // added 33 to hex value for 20% opacity
        backgroundColor,
        isBreak,
      )}>
      <View style={styles.subjectContainer}>
        {/* {SubjectIcon ? <SubjectIcon /> : null} */}
        <Text variant={TextVariants.Header3}>{subjectName}</Text>
      </View>
      <View style={styles.timesView}>
        <Text variant={TextVariants.Header3}>
          {moment(startTime).format('HH:mm')}
        </Text>
        <Text variant={TextVariants.Header3}>{' - '}</Text>
        <Text variant={TextVariants.Header3}>
          {moment(endTime).format('HH:mm')}
        </Text>
      </View>
    </View>
  );
};

export default SubjectCard;
