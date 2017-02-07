import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { SpeakerService } from '../speaker/speaker.service';
import { Speaker } from '../speaker/speaker';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpeakerListResolver implements Resolve<any> {
  constructor(private speakerService: SpeakerService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Speaker[]> {
    return this.speakerService.getSpeakers();
  }
}
