import {ReactNode} from 'react';
import {ColorValue} from 'react-native';

export interface SubjectCardProps {
  subjectName: String;
  subjectIcon?: ReactNode;
  startTime: Date;
  endTime: Date;
  backgroundColor: ColorValue;
  borderColor: ColorValue;
  isBreak: boolean;
}
