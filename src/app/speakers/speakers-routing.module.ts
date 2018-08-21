import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpeakerListComponent } from './';
import { SpeakerListResolver } from './speaker-list/speaker-list.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '', 
        component: SpeakerListComponent, 
        resolve: { 
          speakers: SpeakerListResolver 
        }
      }
    ])
  ],
  exports: [RouterModule],
  providers: [SpeakerListResolver]
})
export class SpeakersRoutingModule {

}