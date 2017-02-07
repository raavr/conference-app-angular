import { AgendaData } from './agenda-data';
import { AgendaRow } from './agenda-row';

export class AgendaDay {
    day: string;
    agenda: AgendaRow[];
    totalRooms: number;

    constructor(day: string, agenda: AgendaRow[], totalRooms: number) {
        this.day = day;
        this.agenda = agenda;
        this.totalRooms = totalRooms;
    }
}