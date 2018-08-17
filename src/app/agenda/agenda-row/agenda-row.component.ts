import { Component, Input } from '@angular/core';
import { AgendaRow } from '../agenda/agenda-row';
import { AgendaData } from '../agenda/agenda-data';
import { Observable } from 'rxjs/Observable';
import { TD_TYPES } from '../../app.constant';

@Component({
  selector: '[agenda-row]',
  styleUrls: ['./agenda-row.component.scss'],
  templateUrl: './agenda-row.component.html'
})

export class AgendaRowComponent {
  @Input() row: AgendaRow;
  @Input() activeRooms: number[];

  getColspan(cell: AgendaData): number {
    return cell.type === TD_TYPES[TD_TYPES.GENERAL].toLowerCase() 
      ? this.activeRooms.length 
      : 1;
  }

  getTdClass(cell: AgendaData): string {
    let classList: string = cell.type;
    if (cell.room) {
      classList += ' ' + cell.type + '-' + cell.room;
    }

    return classList;
  }

  isRoomActive(room: number) {
    return this.activeRooms.indexOf(room) !== -1;
  }
}
