import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersModule } from '../speakers';
import { PresentationListComponent } from './';
import { PresentationService } from './presentation/presentation.service';
import { PresentationsRoutingModule } from './presentations-routing.module';

@NgModule({
    imports: [ 
        CommonModule, 
        SpeakersModule,
        PresentationsRoutingModule
    ],
    declarations: [
        PresentationListComponent, 
    ]
})
export class PresentationsModule {

}