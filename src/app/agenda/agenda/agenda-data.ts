import { Speaker } from '../../speakers/speaker/speaker';

export class AgendaData {
  title?: string;
  speakers?: Speaker[];
  timeStart?: number;
  timeEnd?: number;
  type: string;
  room?: number;

  constructor(room: number, type: string, timeStart: number) {
    this.type = type;
    this.room = room;
    this.timeStart = timeStart;
  }
}