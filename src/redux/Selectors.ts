import {AppState} from './Store';

export const getCurrentDay = (state: AppState) => state.TimeTable.currentDate;
