import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { PartnerService } from '../partner/partner.service';
import { PartnerGroup } from '../partner/partner-group';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PartnerListResolver implements Resolve<any> {
  constructor(private partnerService: PartnerService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PartnerGroup[]> {
    return this.partnerService.getPartners();
  }
}
