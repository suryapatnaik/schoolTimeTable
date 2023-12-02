import React from 'react';

import {FlatList, SafeAreaView, View} from 'react-native';
import TimeTable from './src/screens/TimeTable/TimeTable.view';
import DayCard from './src/components/Card/DayCard/DayCard';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <TimeTable />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {[1, 2, 3, 5, 6, 7, 8].map(itm => (
          <DayCard date={new Date()} isSelected={itm === 3} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default App;
