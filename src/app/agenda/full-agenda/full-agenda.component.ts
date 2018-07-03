import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AgendaDay } from '../agenda/agenda-day';
import { ActivatedRoute } from '@angular/router';
import { AgendaModalService } from './agenda-modal.service';
import { Speaker } from '../../speakers/speaker/speaker';

@Component({
  selector: 'full-agenda',
  styleUrls: [ './full-agenda.component.scss' ],
  templateUrl: './full-agenda.component.html',
  providers: [ AgendaModalService ]
})
export class FullAgendaComponent {
    agenda: AgendaDay[];
    daysName: string[];
    activeDay: number;
    selectedSpeaker: Speaker;
    private unsub$ = new Subject();

    constructor(private route: ActivatedRoute, private agendaModalService: AgendaModalService) {
         
    }

    computeDayNameWidth(): string {
        if(!this.daysName.length) {
            return '0%';
        }

        return Math.floor(100 / this.daysName.length) + '%';
    }

    isActive(day: number) {
        return this.activeDay === day; 
    }

    setDayActive(index: number) {
        this.activeDay = index;
    }

    ngOnInit() {
        this.route.data
            .subscribe((data: { agenda: [AgendaDay[], string[]] }) => {
                this.agenda = data.agenda[0];
                this.daysName = data.agenda[1];
            });

        this.activeDay = 0;
        
        this.agendaModalService
            .speakerSelected$
            .takeUntil(this.unsub$)
            .subscribe(speaker => this.selectedSpeaker = speaker);
    }

    ngOnDestroy() {
        this.unsub$.next();
        this.unsub$.complete();
    }
}
