import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PartnerListComponent } from './';
import { PartnerListResolver } from './partner-list/partner-list.resolver';
import { PartnerService } from './partner/partner.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: 'partners', 
        component: PartnerListComponent, 
        resolve: { 
          partners: PartnerListResolver 
        } 
      }
    ])
  ],
  exports: [RouterModule],
  providers: [
    PartnerService, 
    PartnerListResolver
  ]
})
export class PartnersRoutingModule {

}