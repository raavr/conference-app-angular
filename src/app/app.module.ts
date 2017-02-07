import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { NavbarComponent } from './navbar';
import { HomeComponent } from './home';
import { PartnerGroupComponent } from './partners'
import { PartnerListComponent } from './partners';
import { SpeakerItemComponent } from './speakers';
import { SpeakerListComponent } from './speakers';
import { DayAgendaComponent } from './agenda';
import { FullAgendaComponent } from './agenda';
import { AgendaRowComponent } from './agenda';
import { AgendaCellComponent } from './agenda';
import { PresentationListComponent } from './presentations';
import { NewsDetailComponent } from './news';
import { NewsListComponent } from './news';
import { NewsCategoriesComponent } from './news';
import { NewsComponent } from './news';
import { SpeakerModalComponent } from './speakers';
import { NoContentComponent } from './no-content';
import { AppFooterComponent } from './app-footer';
import { MaxLenPipe } from './news/news/news-len.pipe';
import { SpeakerService } from './speakers/speaker/speaker.service';
import { NewsService } from './news/news/news.service';
import { PartnerService } from './partners/partner/partner.service';
import { AgendaService } from './agenda/agenda/agenda.service';
import { PresentationService } from './presentations/presentation/presentation.service';
import { CollapseNavbarDirective } from './navbar/navbar-collapse.directive';

const APP_SERVICE_PROVIDERS = [
  SpeakerService,
  NewsService,
  PartnerService,
  AgendaService,
  PresentationService
];

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  ...APP_SERVICE_PROVIDERS
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NavbarComponent,
    AppFooterComponent,
    HomeComponent,
    PartnerGroupComponent,
    PartnerListComponent,
    SpeakerItemComponent,
    SpeakerListComponent,
    SpeakerModalComponent,
    PresentationListComponent,
    DayAgendaComponent,
    FullAgendaComponent,
    AgendaRowComponent,
    AgendaCellComponent,
    NewsDetailComponent,
    NewsListComponent,
    NewsCategoriesComponent,
    NewsComponent,
    NoContentComponent,
    MaxLenPipe,
    CollapseNavbarDirective
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

}

