import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Speaker } from '../../speakers/speaker/speaker';

@Injectable()
export class AgendaModalService {
  
  private speakerSelectedSource = new Subject<Speaker>();

  speakerSelected$ = this.speakerSelectedSource.asObservable();

  selectSpeaker(speaker: Speaker): void {
      this.speakerSelectedSource.next(speaker);
  }

}
