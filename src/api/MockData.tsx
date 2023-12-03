import React from 'react';
import BreakIcon from '../assets/icons/BreakIcon';
import LunchIcon from '../assets/icons/LunchIcon';

export interface MockDataType {
  startTime: string;
  subjectName: string;
  subjectIcon: JSX.Element | null;
  backgroundColor: string;
  endTime: string;
  isBreak: boolean;
}

export const MockData: MockDataType[][] = [
  [
    {
      startTime: '08:30',
      subjectName: 'Chemistry',
      subjectIcon: null,
      backgroundColor: '#bcb807',
      endTime: '09:00',
      isBreak: false,
    },
    {
      startTime: '09:00',
      subjectName: 'Chemistry',
      subjectIcon: null,
      backgroundColor: '#e94817',
      endTime: '09:40',
      isBreak: false,
    },
    {
      startTime: '09:40',
      subjectName: 'Zero Class',
      subjectIcon: null,
      backgroundColor: '#0617bd',
      endTime: '10:20',
      isBreak: false,
    },
    {
      startTime: '10:20',
      subjectName: 'Break',
      subjectIcon: <BreakIcon height={18} width={18} />,
      backgroundColor: '#bc846c',
      endTime: '10:40',
      isBreak: true,
    },
    {
      startTime: '10:40',
      subjectName: 'Zero Class',
      subjectIcon: null,
      backgroundColor: '#144959',
      endTime: '11:20',
      isBreak: false,
    },
    {
      startTime: '11:20',
      subjectName: 'Zero Class',
      subjectIcon: null,
      backgroundColor: '#c40fa5',
      endTime: '11:40',
      isBreak: false,
    },
    {
      startTime: '11:40',
      subjectName: 'Chemistry',
      subjectIcon: null,
      backgroundColor: '#5c8d03',
      endTime: '12:10 PM',
      isBreak: false,
    },
    {
      startTime: '12:10 PM',
      subjectName: 'Lunch Break',
      subjectIcon: <LunchIcon height={18} width={18} />,
      backgroundColor: '#cae4f6',
      endTime: '12:50 PM',
      isBreak: true,
    },
    {
      startTime: '12:50 PM',
      subjectName: 'Chemistry',
      subjectIcon: null,
      backgroundColor: '#07f7e4',
      endTime: '01:30 PM',
      isBreak: false,
    },
  ],
  [
    {
      startTime: '08:30',
      subjectName: 'SSC',
      subjectIcon: null,
      backgroundColor: '#862d2c',
      endTime: '09:00',
      isBreak: false,
    },
    {
      startTime: '09:00',
      subjectName: 'Physics',
      subjectIcon: null,
      backgroundColor: '#e9051b',
      endTime: '09:40',
      isBreak: false,
    },
    {
      startTime: '09:40',
      subjectName: 'Chemistry',
      subjectIcon: null,
      backgroundColor: '#3e3bd6',
      endTime: '10:20',
      isBreak: false,
    },
    {
      startTime: '10:20',
      subjectName: 'Break',
      subjectIcon: <BreakIcon height={18} width={18} />,
      backgroundColor: '#e95d8c',
      endTime: '10:40',
      isBreak: true,
    },
    {
      startTime: '10:40',
      subjectName: 'Math',
      subjectIcon: null,
      backgroundColor: '#fa4913',
      endTime: '11:20',
      isBreak: false,
    },
    {
      startTime: '11:20',
      subjectName: 'Chemistry',
      subjectIcon: null,
      backgroundColor: '#4a3528',
      endTime: '11:40',
      isBreak: false,
    },
    {
      startTime: '11:40',
      subjectName: 'Zero Class',
      subjectIcon: null,
      backgroundColor: '#5c941b',
      endTime: '12:10 PM',
      isBreak: false,
    },
    {
      startTime: '12:10 PM',
      subjectName: 'Lunch Break',
      subjectIcon: <LunchIcon height={18} width={18} />,
      backgroundColor: '#b8cacd',
      endTime: '12:50 PM',
      isBreak: true,
    },
    {
      startTime: '12:50 PM',
      subjectName: 'Math',
      subjectIcon: null,
      backgroundColor: '#038a29',
      endTime: '01:30 PM',
      isBreak: false,
    },
  ],
  [
    {
      startTime: '08:30',
      subjectName: 'Chemistry',
      subjectIcon: null,
      backgroundColor: '#8f17d8',
      endTime: '09:00',
      isBreak: false,
    },
    {
      startTime: '09:00',
      subjectName: 'English',
      subjectIcon: null,
      backgroundColor: '#5f1154',
      endTime: '09:40',
      isBreak: false,
    },
    {
      startTime: '09:40',
      subjectName: 'SSC',
      subjectIcon: null,
      backgroundColor: '#0d6237',
      endTime: '10:20',
      isBreak: false,
    },
    {
      startTime: '10:20',
      subjectName: 'Break',
      subjectIcon: <BreakIcon height={18} width={18} />,
      backgroundColor: '#502ace',
      endTime: '10:40',
      isBreak: true,
    },
    {
      startTime: '10:40',
      subjectName: 'Physics',
      subjectIcon: null,
      backgroundColor: '#65af78',
      endTime: '11:20',
      isBreak: false,
    },
    {
      startTime: '11:20',
      subjectName: 'Chemistry',
      subjectIcon: null,
      backgroundColor: '#8f7fe5',
      endTime: '11:40',
      isBreak: false,
    },
    {
      startTime: '11:40',
      subjectName: 'PT',
      subjectIcon: null,
      backgroundColor: '#dc9a6f',
      endTime: '12:10 PM',
      isBreak: false,
    },
    {
      startTime: '12:10 PM',
      subjectName: 'Lunch Break',
      subjectIcon: <LunchIcon height={18} width={18} />,
      backgroundColor: '#fb91bc',
      endTime: '12:50 PM',
      isBreak: true,
    },
    {
      startTime: '12:50 PM',
      subjectName: 'Physics',
      subjectIcon: null,
      backgroundColor: '#b9ef3e',
      endTime: '01:30 PM',
      isBreak: false,
    },
  ],
  [
    {
      startTime: '08:30',
      subjectName: 'Math',
      subjectIcon: null,
      backgroundColor: '#cb044e',
      endTime: '09:00',
      isBreak: false,
    },
    {
      startTime: '09:00',
      subjectName: 'Math',
      subjectIcon: null,
      backgroundColor: '#80f07f',
      endTime: '09:40',
      isBreak: false,
    },
    {
      startTime: '09:40',
      subjectName: 'English',
      subjectIcon: null,
      backgroundColor: '#a5df4a',
      endTime: '10:20',
      isBreak: false,
    },
    {
      startTime: '10:20',
      subjectName: 'Break',
      subjectIcon: <BreakIcon height={18} width={18} />,
      backgroundColor: '#fc3f16',
      endTime: '10:40',
      isBreak: true,
    },
    {
      startTime: '10:40',
      subjectName: 'Math',
      subjectIcon: null,
      backgroundColor: '#8ab91d',
      endTime: '11:20',
      isBreak: false,
    },
    {
      startTime: '11:20',
      subjectName: 'Chemistry',
      subjectIcon: null,
      backgroundColor: '#8b19de',
      endTime: '11:40',
      isBreak: false,
    },
    {
      startTime: '11:40',
      subjectName: 'PT',
      subjectIcon: null,
      backgroundColor: '#79c9c0',
      endTime: '12:10 PM',
      isBreak: false,
    },
    {
      startTime: '12:10 PM',
      subjectName: 'Lunch Break',
      subjectIcon: <LunchIcon height={18} width={18} />,
      backgroundColor: '#591fbb',
      endTime: '12:50 PM',
      isBreak: true,
    },
    {
      startTime: '12:50 PM',
      subjectName: 'Physics',
      subjectIcon: null,
      backgroundColor: '#fd934f',
      endTime: '01:30 PM',
      isBreak: false,
    },
  ],
  [
    {
      startTime: '08:30',
      subjectName: 'Math',
      subjectIcon: null,
      backgroundColor: '#9a7aae',
      endTime: '09:00',
      isBreak: false,
    },
    {
      startTime: '09:00',
      subjectName: 'SSC',
      subjectIcon: null,
      backgroundColor: '#07c897',
      endTime: '09:40',
      isBreak: false,
    },
    {
      startTime: '09:40',
      subjectName: 'SSC',
      subjectIcon: null,
      backgroundColor: '#84773d',
      endTime: '10:20',
      isBreak: false,
    },
    {
      startTime: '10:20',
      subjectName: 'Break',
      subjectIcon: <BreakIcon height={18} width={18} />,
      backgroundColor: '#7818e4',
      endTime: '10:40',
      isBreak: true,
    },
    {
      startTime: '10:40',
      subjectName: 'English',
      subjectIcon: null,
      backgroundColor: '#1189a4',
      endTime: '11:20',
      isBreak: false,
    },
    {
      startTime: '11:20',
      subjectName: 'SSC',
      subjectIcon: null,
      backgroundColor: '#170341',
      endTime: '11:40',
      isBreak: false,
    },
    {
      startTime: '11:40',
      subjectName: 'Math',
      subjectIcon: null,
      backgroundColor: '#be41a8',
      endTime: '12:10 PM',
      isBreak: false,
    },
    {
      startTime: '12:10 PM',
      subjectName: 'Lunch Break',
      subjectIcon: <LunchIcon height={18} width={18} />,
      backgroundColor: '#df19dc',
      endTime: '12:50 PM',
      isBreak: true,
    },
    {
      startTime: '12:50 PM',
      subjectName: 'Zero Class',
      subjectIcon: null,
      backgroundColor: '#03f0a0',
      endTime: '01:30 PM',
      isBreak: false,
    },
  ],
  [
    {
      startTime: '08:30',
      subjectName: 'SSC',
      subjectIcon: null,
      backgroundColor: '#34b682',
      endTime: '09:00',
      isBreak: false,
    },
    {
      startTime: '09:00',
      subjectName: 'Physics',
      subjectIcon: null,
      backgroundColor: '#9a559a',
      endTime: '09:40',
      isBreak: false,
    },
    {
      startTime: '09:40',
      subjectName: 'Zero Class',
      subjectIcon: null,
      backgroundColor: '#696b1c',
      endTime: '10:20',
      isBreak: false,
    },
    {
      startTime: '10:20',
      subjectName: 'Break',
      subjectIcon: <BreakIcon height={18} width={18} />,
      backgroundColor: '#27f3b6',
      endTime: '10:40',
      isBreak: true,
    },
    {
      startTime: '10:40',
      subjectName: 'English',
      subjectIcon: null,
      backgroundColor: '#98d4e5',
      endTime: '11:20',
      isBreak: false,
    },
    {
      startTime: '11:20',
      subjectName: 'Math',
      subjectIcon: null,
      backgroundColor: '#c8410d',
      endTime: '11:40',
      isBreak: false,
    },
    {
      startTime: '11:40',
      subjectName: 'English',
      subjectIcon: null,
      backgroundColor: '#9a2979',
      endTime: '12:10 PM',
      isBreak: false,
    },
    {
      startTime: '12:10 PM',
      subjectName: 'Lunch Break',
      subjectIcon: <LunchIcon height={18} width={18} />,
      backgroundColor: '#25eef0',
      endTime: '12:50 PM',
      isBreak: true,
    },
    {
      startTime: '12:50 PM',
      subjectName: 'PT',
      subjectIcon: null,
      backgroundColor: '#44c9d9',
      endTime: '01:30 PM',
      isBreak: false,
    },
  ],
];
