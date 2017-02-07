import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { SpeakerListComponent } from './';
import { SpeakerListResolver } from './speaker-list/speaker-list.resolver';
import { SpeakerService } from './speaker/speaker.service';

@NgModule({
    imports: [
        RouterModule.forChild([
              { path: 'speakers', component: SpeakerListComponent, resolve: { speakers: SpeakerListResolver }}
        ])
    ],
    exports: [ RouterModule ],
    providers: [ SpeakerService, SpeakerListResolver ]
})
export class SpeakersRoutingModule {

}