import { AgendaData } from './agenda-data';

export class AgendaRow {
    time: number;
    sessions: AgendaData[];

    constructor(time: number, sessions: AgendaData[]) {
        this.time = time;
        this.sessions = sessions;
    }
}