import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerModalComponent, SpeakerListComponent, SpeakerItemComponent } from './';
import { SpeakerService } from './speaker/speaker.service';
import { SpeakersRoutingModule } from './speakers-routing.module';

@NgModule({
    imports: [ CommonModule, SpeakersRoutingModule ],
    declarations: [
        SpeakerItemComponent, 
        SpeakerListComponent, 
        SpeakerModalComponent
    ],
    exports: [ 
        SpeakerItemComponent, 
        SpeakerModalComponent
    ]
})
export class SpeakersModule {

}