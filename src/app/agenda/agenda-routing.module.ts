import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgendaResolver } from './full-agenda/full-agenda.resolver';
import { FullAgendaComponent } from './';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '', 
        component: FullAgendaComponent, 
        resolve: { 
          agenda: AgendaResolver 
        } 
      },
    ])
  ],
  exports: [RouterModule],
  providers: [AgendaResolver]
})
export class AgendaRoutingModule {

}