import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './';
import { HomeRoutingModule } from './home-routing.module';
import { PartnersModule } from '../partners';
import { SpeakersModule } from '../speakers';
import { NewsModule } from '../news';

@NgModule({
    imports: [ 
        CommonModule, 
        HomeRoutingModule,
        PartnersModule,
        SpeakersModule,
        NewsModule
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule {

}