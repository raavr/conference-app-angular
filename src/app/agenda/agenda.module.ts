import { NgModule } from '@angular/core';
import { 
  AgendaCellComponent, 
  AgendaRowComponent, 
  DayAgendaComponent, 
  FullAgendaComponent 
} from './';
import { AgendaRoutingModule } from './agenda-routing.module';
import { AgendaService } from './agenda/agenda.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AgendaRoutingModule
  ],
  declarations: [
    AgendaCellComponent,
    AgendaRowComponent,
    DayAgendaComponent,
    FullAgendaComponent
  ],
  providers: [
    AgendaService
  ]
})
export class AgendaModule {

}