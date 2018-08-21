import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PartnerListComponent } from './';
import { PartnerListResolver } from './partner-list/partner-list.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '', 
        component: PartnerListComponent, 
        resolve: { 
          partners: PartnerListResolver 
        } 
      }
    ])
  ],
  exports: [RouterModule],
  providers: [PartnerListResolver]
})
export class PartnersRoutingModule {

}