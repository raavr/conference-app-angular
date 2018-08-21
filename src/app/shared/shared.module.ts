import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaxLenPipe } from './max-len.pipe';
import { PartnerGroupComponent } from './partner-group/partner-group.component';
import { SpeakerItemComponent } from './speaker-item/speaker-item.component';
import { SpeakerModalComponent } from './speaker-modal/speaker-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MaxLenPipe,
    PartnerGroupComponent,
    SpeakerItemComponent,
    SpeakerModalComponent
  ],
  exports: [
    CommonModule,
    MaxLenPipe,
    PartnerGroupComponent,
    SpeakerItemComponent,
    SpeakerModalComponent
  ]
})
export class SharedModule {

}