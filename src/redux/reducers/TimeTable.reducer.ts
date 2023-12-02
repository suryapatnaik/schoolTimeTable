import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import moment from 'moment';

export type TimeTableState = {
  currentDate: string;
};

export const INITIAL_STATE: TimeTableState = {
  currentDate: moment().format('YYYY-MM-DD'),
};

export const TimeTable = createSlice({
  name: 'TimeTable',
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentDate: (state, action: PayloadAction<string>) => ({
      ...state,
      currentDate: action.payload,
    }),
  },
});

export const {setCurrentDate} = TimeTable.actions;

export default TimeTable.reducer;
