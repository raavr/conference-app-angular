import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { NavbarComponent } from './navbar';
import { NoContentComponent } from './no-content';
import { AppFooterComponent } from './app-footer';
import { CollapseNavbarDirective } from './navbar/navbar-collapse.directive';

import { HomeModule } from './home';
import { AgendaModule } from './agenda';
import { NewsService } from './news/news/news.service';
import { PartnerService } from './partners/partner/partner.service';
import { SpeakerService } from './speakers/speaker/speaker.service';

const APP_SERVICE_PROVIDERS = [
  NewsService,
  PartnerService,
  SpeakerService
];

const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  ...APP_SERVICE_PROVIDERS
];

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    NavbarComponent,
    AppFooterComponent,
    NoContentComponent,
    CollapseNavbarDirective
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    RouterModule.forRoot(ROUTES, { 
      useHash: true, 
      preloadingStrategy: PreloadAllModules 
    }),
  ],
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

}

