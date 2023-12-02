import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import TimeTable from './src/screens/TimeTable/TimeTable.view';

const App: React.FC = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView>
        <TimeTable />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
