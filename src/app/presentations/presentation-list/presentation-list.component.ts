import { Component } from '@angular/core';
import { Presentation } from '../presentation/presentation';
import { Speaker } from '../../speakers/speaker/speaker';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'presentation-list',
  styleUrls: ['./presentation-list.component.scss'],
  templateUrl: './presentation-list.component.html'
})
export class PresentationListComponent {
  presentations: Presentation[];
  selectedSpeaker: Speaker;

  constructor(private router: Router, private route: ActivatedRoute) { }

  selectSpeaker(speaker: Speaker) {
    this.selectedSpeaker = speaker;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { presentations: Presentation[] }) => {
        this.presentations = data.presentations;
      });
  }
}