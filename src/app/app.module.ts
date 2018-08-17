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

import { SpeakersModule } from './speakers';
import { PresentationsModule } from './presentations';
import { PartnersModule } from './partners';
import { HomeModule } from './home';
import { NewsModule } from './news';
import { AgendaModule } from './agenda';

const APP_SERVICE_PROVIDERS = [

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
    SpeakersModule,
    PresentationsModule,
    PartnersModule,
    HomeModule,
    NewsModule,
    AgendaModule,
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

