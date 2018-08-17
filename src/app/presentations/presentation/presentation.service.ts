import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Presentation } from './presentation';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PresentationService {

  constructor(public http: Http) {

  }

  getPresentations(): Observable<Presentation[]> {
    return this.http.get("/assets/mock-data/mock-presentations.json")
      .map(res => res.json().presentations as Presentation[]);
  }
}
