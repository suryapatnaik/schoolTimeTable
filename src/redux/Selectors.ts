import {AppState} from './Store';

export const getCurrentDay = (state: AppState) => state.TimeTable.currentDate;

export const getWeeksTimeTable = (state: AppState) =>
  state.TimeTable.timeTableData;
