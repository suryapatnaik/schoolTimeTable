import {configureStore} from '@reduxjs/toolkit';
import TimeTable, {TimeTableState} from './reducers/TimeTable.reducer';

export interface AppState {
  TimeTable: TimeTableState;
}

const Store = configureStore({
  reducer: {
    TimeTable: TimeTable,
  },
});

export default Store;
