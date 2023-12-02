import React from 'react';
import {View} from 'react-native';
import styles from './SubjectCard.styles';
import {SubjectCardProps} from './SubjectCard.types';
import Text, {TextVariants} from '../../Text/Text.view';
import moment from 'moment';

const SubjectCard = (props: SubjectCardProps) => {
  const {subjectIcon} = props;
  const SubjectIcon = subjectIcon;
  return (
    <View
      style={styles.container(
        props.backgroundColor + '33', // added 33 to hex value for 20% opacity
        props.borderColor,
        props.isBreak,
      )}>
      <View style={styles.subjectContainer}>
        {SubjectIcon ? <SubjectIcon /> : null}
        <Text variant={TextVariants.Header3}>{props.subjectName}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text variant={TextVariants.Header3}>
          {moment(props.startTime).format('HH:mm')}
        </Text>
        <Text variant={TextVariants.Header3}>{' - '}</Text>
        <Text variant={TextVariants.Header3}>
          {moment(props.endTime).format('HH:mm')}
        </Text>
      </View>
    </View>
  );
};

export default SubjectCard;
