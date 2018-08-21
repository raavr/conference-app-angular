import { Routes } from '@angular/router'
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { 
    path: 'news', 
    loadChildren: '/app/news/news.module#NewsModule' 
  },
  {
    path: 'speakers',
    loadChildren: '/app/speakers/speakers.module#SpeakersModule'
  },
  {
    path: 'presentations',
    loadChildren: '/app/presentations/presentations.module#PresentationsModule'
  },
  {
    path: 'partners',
    loadChildren: '/app/partners/partners.module#PartnersModule'
  },
  {
    path: 'agenda',
    loadChildren: '/app/agenda/agenda.module#AgendaModule'
  },
  { 
    path: '**', 
    component: NoContentComponent 
  }
];
