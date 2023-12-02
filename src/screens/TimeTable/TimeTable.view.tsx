import React from 'react';
import {Text, View} from 'react-native';
import styles from './TimeTable.styles';

interface TimeTableProps {}

/**  */
const TimeTable: React.FC<TimeTableProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>TimeTable</Text>
    </View>
  );
};

export default TimeTable;
