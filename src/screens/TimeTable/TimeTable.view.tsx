import React from 'react';
import {View} from 'react-native';
import Text, {TextVariants} from '../../components/Text/Text.view';
import styles from './TimeTable.styles';

interface TimeTableProps {}

/**  */
const TimeTable: React.FC<TimeTableProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text variant={TextVariants.Header1}>TimeTable</Text>
      </View>
    </View>
  );
};

export default TimeTable;
