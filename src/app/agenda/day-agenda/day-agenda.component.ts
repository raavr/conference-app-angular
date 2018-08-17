import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AgendaDay } from '../agenda/agenda-day';

@Component({
  selector: 'day-agenda',
  styleUrls: ['./day-agenda.component.scss'],
  templateUrl: './day-agenda.component.html'
})
export class DayAgendaComponent {
  @Input() agendaRows: AgendaDay;
  @Input() isActive: boolean;
  rooms: number[] = [];
  activeRooms: number[] = [];

  isRoomActive(room: number) {
    return this.activeRooms.indexOf(room) !== -1;
  }

  toggleRoomActive(room: number) {
    if (this.isRoomActive(room)) {
      this.activeRooms.splice(this.activeRooms.indexOf(room), 1);
    } else {
      this.activeRooms.push(room);
    }
  }

  computeTHWidth(): string {
    if (!this.activeRooms.length) {
      return "0%";
    }

    return Math.round(100 / this.activeRooms.length) + "%";
  }

  private fillRoomsArray() {
    this.rooms = Array.from(
      { length: this.agendaRows.totalRooms }, 
      (_, i) => i+1
    );
  }

  ngOnInit() {
    this.fillRoomsArray();
    this.activeRooms = this.activeRooms.concat(this.rooms);
  }
}
