import { Speaker } from '../../speakers/speaker/speaker';

export class Presentation {
    title: string;
    description: string;
    timeStart: number;
    timeEnd: number;
    speakers: Speaker[];
    day: string;
    room: number;
}