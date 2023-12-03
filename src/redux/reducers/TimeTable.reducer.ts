import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import moment from 'moment';
import {MockData, MockDataType} from '../../api/MockData';

export type TimeTableState = {
  currentDate: string;
  timeTableData: MockDataType[][];
};

export const INITIAL_STATE: TimeTableState = {
  currentDate: moment().format('YYYY-MM-DD'),
  /** time table for the current week */
  timeTableData: MockData.slice(0, 6),
};

export const TimeTable = createSlice({
  name: 'TimeTable',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentDate: (state, action: PayloadAction<string>) => ({
      ...state,
      currentDate: action.payload,
    }),
    setTimeTableData: (state, action: PayloadAction<MockDataType[][]>) => ({
      ...state,
      timeTableData: action.payload,
    }),
  },
});

export const {setCurrentDate, setTimeTableData} = TimeTable.actions;

export default TimeTable.reducer;
