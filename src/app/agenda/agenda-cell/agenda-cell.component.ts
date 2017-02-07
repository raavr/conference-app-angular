import { Component, Input } from '@angular/core';
import { AgendaModalService } from '../full-agenda/agenda-modal.service';
import { Speaker } from '../../speakers/speaker/speaker';
import { AgendaData } from '../agenda/agenda-data';

@Component({
  selector: '[agenda-cell]',
  styleUrls: [ './agenda-cell.component.scss' ],
  templateUrl: './agenda-cell.component.html'
})
export class AgendaCellComponent {
  @Input() cell: AgendaData[];
  
  constructor(private agendaModalService: AgendaModalService) {}

  selectSpeaker(speaker: Speaker): void {
    this.agendaModalService.selectSpeaker(speaker);
  }

}
