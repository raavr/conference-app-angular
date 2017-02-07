import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaCellComponent, AgendaRowComponent, DayAgendaComponent, FullAgendaComponent } from './';
import { AgendaRoutingModule } from './agenda-routing.module';
import { SpeakersModule } from '../speakers';

@NgModule({
    imports: [
        CommonModule,
        AgendaRoutingModule,
        SpeakersModule
    ],
    declarations: [
        AgendaCellComponent,
        AgendaRowComponent,
        DayAgendaComponent,
        FullAgendaComponent
    ]
})
export class AgendaModule {

}