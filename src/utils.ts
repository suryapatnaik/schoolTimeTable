import moment from 'moment';
import {subjectColors as SUBJECT_COLORS} from './constants/colors';
import {MockDataType} from './api/MockData';

/** Get all the days in a week for a given date
 * @param date in YYYY-MM-DD format
 * @returns string of dates in YYYY-MM-DD format, title showing start and end date
 */
export const getCurrentWeekDetails = (date: string) => {
  const currentDate = moment(date);
  const weekStart = currentDate.clone().startOf('isoWeek');
  let days = [];

  for (let i = 0; i <= 5; i++) {
    days.push(moment(weekStart).add(i, 'days').format('YYYY-MM-DD'));
  }

  const startDate = moment(days[0]).format('Do MMM');
  const endDate = moment(days[5]).format('Do MMM');

  return {
    daysOfWeek: days,
    weekTitle: `${startDate} - ${endDate}`,
  };
};

/** For a given date, returns the first day for the next week
 * @param date in YYYY-MM-DD format
 * @returns the first day of the next week in YYYY-MM-DD format
 */
export const getNextWeeksFirstDay = (date: string) => {
  const nextDayOfWeek = moment(date)
    .startOf('isoWeek')
    .add(1, 'week')
    .format('YYYY-MM-DD');
  return nextDayOfWeek;
};

/** For a given date, returns the first day for the previous week
 * @param date in YYYY-MM-DD format
 * @returns the first day of the previous week in YYYY-MM-DD format
 */
export const getPreviousWeeksFirstDay = (date: string) => {
  const previousWeekFirstDay = moment(date)
    .startOf('isoWeek')
    .subtract(1, 'week')
    .format('YYYY-MM-DD');
  return previousWeekFirstDay;
};

export const shuffleArray = (array: MockDataType[][]): MockDataType[][] => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

/** get a random subject color */
export const getRandomColor = (): string => {
  const colorKeys = Object.keys(SUBJECT_COLORS);
  const randomKey = colorKeys[
    Math.floor(Math.random() * colorKeys.length)
  ] as keyof typeof SUBJECT_COLORS;

  return SUBJECT_COLORS[randomKey];
};
