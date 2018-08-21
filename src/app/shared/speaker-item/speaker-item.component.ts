import { Component, Input } from '@angular/core';
import { Speaker } from '../../speakers/speaker/speaker';

@Component({
  selector: 'speaker-item',
  styleUrls: ['./speaker-item.component.scss'],
  templateUrl: './speaker-item.component.html'
})
export class SpeakerItemComponent {
  @Input() speaker: Speaker;
}