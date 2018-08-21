import { NgModule } from '@angular/core';
import { SpeakerListComponent } from './';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SpeakersRoutingModule
  ],
  declarations: [
    SpeakerListComponent,
  ]
})
export class SpeakersModule {

}