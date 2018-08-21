import { Component, Input } from '@angular/core';
import { Speaker } from '../../speakers/speaker/speaker';

@Component({
  selector: 'speaker-modal',
  styleUrls: ['./speaker-modal.component.scss'],
  templateUrl: './speaker-modal.component.html'
})
export class SpeakerModalComponent {
  @Input() speaker: Speaker;
}