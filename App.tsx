import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import TimeTable from './src/screens/TimeTable/TimeTable.view';
import DayCard from './src/components/Card/DayCard/DayCard.view';
import SubjectCard from './src/components/Card/SubjectCard/SubjectCard.view';
import Text from './src/components/Text/Text.view';
import {timetableData} from './src/data';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <TimeTable />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        {[1, 2, 3, 5, 6, 7, 8].map(itm => (
          <DayCard date={new Date()} isSelected={itm === 3} />
        ))}
      </View>
      <FlatList
        data={timetableData[0]}
        ItemSeparatorComponent={() => <View style={{height: 12}} />}
        renderItem={({item}) => <SubjectCard {...item} />}
      />
    </SafeAreaView>
  );
};

export default App;
