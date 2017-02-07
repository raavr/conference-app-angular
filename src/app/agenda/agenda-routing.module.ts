import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgendaService } from './agenda/agenda.service';
import { AgendaResolver } from './full-agenda/full-agenda.resolver';
import { FullAgendaComponent } from './';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'agenda', component: FullAgendaComponent, resolve: { agenda: AgendaResolver } },
        ])
    ],
    exports: [ RouterModule ],
    providers: [ AgendaService, AgendaResolver ]
})
export class AgendaRoutingModule {

}