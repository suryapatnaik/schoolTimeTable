import React from 'react';
import {View} from 'react-native';
import ProfilePic from '../../components/ProfilePic/ProfilePic.view';
import Text from '../../components/Text/Text.view';
import styles from './TimeTable.styles';

interface TimeTableProps {}

/**  */
const TimeTable: React.FC<TimeTableProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text>TimeTable</Text>
        <View>
          <ProfilePic />
        </View>
      </View>
    </View>
  );
};

export default TimeTable;
