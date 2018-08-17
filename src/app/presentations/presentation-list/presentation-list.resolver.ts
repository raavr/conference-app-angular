import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { PresentationService } from '../presentation/presentation.service';
import { Presentation } from '../presentation/presentation';
import { Observable } from 'rxjs';

@Injectable()
export class PresentationListResolver implements Resolve<any> {
  constructor(private presentationService: PresentationService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Presentation[]> {
    return this.presentationService.getPresentations();
  }
}
