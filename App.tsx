import React from 'react';

import {SafeAreaView} from 'react-native';
import TimeTable from './src/screens/TimeTable/TimeTable.view';

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <TimeTable />
    </SafeAreaView>
  );
};

export default App;
