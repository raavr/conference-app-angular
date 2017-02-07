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
import { DayAgendaComponent } from './agenda';
import { FullAgendaComponent } from './agenda';
import { AgendaRowComponent } from './agenda';
import { AgendaCellComponent } from './agenda';
import { NewsDetailComponent } from './news';
import { NewsListComponent } from './news';
import { NewsCategoriesComponent } from './news';
import { NewsComponent } from './news';
import { NoContentComponent } from './no-content';
import { AppFooterComponent } from './app-footer';
import { MaxLenPipe } from './news/news/news-len.pipe';
import { NewsService } from './news/news/news.service';
import { AgendaService } from './agenda/agenda/agenda.service';
import { CollapseNavbarDirective } from './navbar/navbar-collapse.directive';

import { SpeakersModule } from './speakers';
import { PresentationsModule } from './presentations';
import { PartnersModule } from './partners';

const APP_SERVICE_PROVIDERS = [
  NewsService,
  AgendaService
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
    SpeakersModule,
    PresentationsModule,
    PartnersModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

}

