import { Routes } from '@angular/router'
import { HomeComponent } from './home';
import { NewsDetailComponent } from './news';
import { NewsListComponent } from './news';
import { NoContentComponent } from './no-content';
import { NavbarComponent } from './navbar';
import { NewsDetailResolver } from './news/news-detail/news-detail.resolver';
import { NewsListResolver } from './news/news-list/news-list.resolver';
import { FullAgendaComponent } from './agenda';
import { AgendaResolver } from './agenda/full-agenda/full-agenda.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent},
  { path: 'home',  component: HomeComponent},
  { path: 'news', component: NewsListComponent, resolve: {news : NewsListResolver }},
  { path: 'news/:id', component: NewsDetailComponent, resolve: { news: NewsDetailResolver }},
  { path: 'agenda', component: FullAgendaComponent, resolve: { agenda: AgendaResolver } },
  { path: '**',    component: NoContentComponent }
];
