import { Routes } from '@angular/router'
import { HomeComponent } from './home';
import { NewsDetailComponent } from './news';
import { NewsListComponent } from './news';
import { NoContentComponent } from './no-content';
import { NavbarComponent } from './navbar';
import { NewsDetailResolver } from './news/news-detail/news-detail.resolver';
import { NewsListResolver } from './news/news-list/news-list.resolver';
import { SpeakerListComponent } from './speakers';
import { SpeakerListResolver } from './speakers/speaker-list/speaker-list.resolver';
import { PartnerListComponent } from './partners/partner-list/partner-list.component';
import { PartnerListResolver } from './partners/partner-list/partner-list.resolver';
import { FullAgendaComponent } from './agenda';
import { AgendaResolver } from './agenda/full-agenda/full-agenda.resolver';
import { PresentationListResolver } from './presentations/presentation-list/presentation-list.resolver';
import { PresentationListComponent } from './presentations';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent},
  { path: 'home',  component: HomeComponent},
  { path: 'news', component: NewsListComponent, resolve: {news : NewsListResolver }},
  { path: 'news/:id', component: NewsDetailComponent, resolve: { news: NewsDetailResolver }},
  { path: 'speakers', component: SpeakerListComponent, resolve: { speakers: SpeakerListResolver }},
  { path: 'partners', component: PartnerListComponent, resolve: { partners: PartnerListResolver }},
  { path: 'agenda', component: FullAgendaComponent, resolve: { agenda: AgendaResolver } },
  { path: 'presentations', component: PresentationListComponent, resolve: { presentations: PresentationListResolver } },
  { path: '**',    component: NoContentComponent }
];
