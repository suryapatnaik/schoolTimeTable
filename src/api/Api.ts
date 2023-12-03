import {getRandomColor, shuffleArray} from '../utils';
import {MockData} from './MockData';

export enum ENDPOINTS {
  getTimeTable = '/timetable',
}

/** mock api method */
export const Api = {
  get: async (path: ENDPOINTS, params = {}) => {
    switch (path) {
      case ENDPOINTS.getTimeTable:
        const shuffledData = shuffleArray(MockData);
        const sixDaysData = shuffledData.slice(0, 6);

        // randomize subject color
        sixDaysData.forEach(day => {
          day.forEach(subject => (subject.backgroundColor = getRandomColor()));
        });

        return sixDaysData;
    }
  },
};
