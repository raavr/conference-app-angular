import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Speaker } from './speaker';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpeakerService {

  constructor(public http: Http) {

  }

  getSpeakers(): Observable<Speaker[]> {
    return this.http.get("/assets/mock-data/mock-speakers.json")
      .map(res => res.json().speakers as Speaker[]);
  }
}
