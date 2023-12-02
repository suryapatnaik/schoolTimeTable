import React from 'react';
import {Text, View} from 'react-native';
import styles from './WeekSelector.styles';

interface WeekSelectorProps {}

/**  */
const WeekSelector: React.FC<WeekSelectorProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>WeekSelector</Text>
    </View>
  );
};

export default WeekSelector;
