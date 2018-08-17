import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Speaker } from '../../speakers/speaker/speaker';

@Injectable()
export class AgendaModalStub {

  private subject = new BehaviorSubject(this.testSelectedSpeaker);
  speakerSelected$ = this.subject.asObservable();

  private _testSelectedSpeaker: Speaker;
  get testSelectedSpeaker() { return this._testSelectedSpeaker; }
  set testSelectedSpeaker(selectedSpeaker: Speaker) {
    this._testSelectedSpeaker = selectedSpeaker;
    this.subject.next(selectedSpeaker);
  }
}
