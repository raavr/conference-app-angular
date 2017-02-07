import { Routes } from '@angular/router'
import { NoContentComponent } from './no-content';
import { NavbarComponent } from './navbar';
import { FullAgendaComponent } from './agenda';
import { AgendaResolver } from './agenda/full-agenda/full-agenda.resolver';

export const ROUTES: Routes = [
  { path: 'agenda', component: FullAgendaComponent, resolve: { agenda: AgendaResolver } },
  { path: '**',    component: NoContentComponent }
];
