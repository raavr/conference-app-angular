import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Partner } from './partner';
import { Observable } from 'rxjs/Observable';
import { PartnerGroup } from './partner-group';
import { MAX_PARTNERGROUP } from '../../app.constant';

@Injectable()
export class PartnerService {

    constructor(public http: Http) {

    }

    getPartners(maxPartnersGroup: number = MAX_PARTNERGROUP.PARTNERPAGE): Observable<PartnerGroup[]> {
        return this.http.get("/assets/mock-data/mock-partners.json")
            .map(res => res.json().partners as Partner[])
            .flatMap(partners => Observable.from(partners))
            .groupBy(partner => partner.type)
            .flatMap(group => group.reduce((acc, curr) => 
                [...acc, curr], Array<Partner>())
            )
            .map(pg => new PartnerGroup(pg[0].type, pg))
            .take(maxPartnersGroup)
            .toArray();
    }

}
