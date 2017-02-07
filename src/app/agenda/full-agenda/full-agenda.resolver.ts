import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { AgendaService } from '../agenda/agenda.service';
import { Observable } from 'rxjs/Observable';
import { AgendaDay } from '../agenda/agenda-day';

@Injectable()
export class AgendaResolver implements Resolve<any> {
  constructor(private agendaService: AgendaService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<[AgendaDay[], string[]]> {
    let f1: Observable<AgendaDay[]> = this.agendaService.getAgenda();
    return Observable.zip(f1, f1.flatMap(a => this.agendaService.createDaysNameArray(a.length)));
  }
}
