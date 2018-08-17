import { Component } from '@angular/core';
import { Speaker } from '../speaker/speaker';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'speakers',
  styleUrls: ['./speaker-list.component.scss'],
  templateUrl: './speaker-list.component.html'
})
export class SpeakerListComponent {
  speakers: Speaker[];
  selectedSpeaker: Speaker;

  constructor(private route: ActivatedRoute) {

  }

  selectSpeaker(speaker: Speaker) {
    this.selectedSpeaker = speaker;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { speakers: Speaker[] }) => {
        this.speakers = data.speakers;
      });
  }
}