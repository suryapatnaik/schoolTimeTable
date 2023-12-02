import moment from 'moment';

/** Get all the days in a week for a given date
 * @param date in YYYY-MM-DD format
 * @returns string of dates in YYYY-MM-DD format, title showing start and end date
 */
export const getCurrentWeekDetails = (date: string) => {
  const currentDate = moment(date);
  const weekStart = currentDate.clone().startOf('isoWeek');
  let days = [];

  for (let i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, 'days').format('YYYY-MM-DD'));
  }

  const startDate = moment(days[0]).format('Do MMM');
  const endDate = moment(days[6]).format('Do MMM');

  return {
    daysOfWeek: days,
    weekTitle: `${startDate} - ${endDate}`,
  };
};
