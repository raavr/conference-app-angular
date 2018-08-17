import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerGroupComponent, PartnerListComponent } from './';
import { PartnersRoutingModule } from './partners-routing.module';

@NgModule({
  imports: [
    CommonModule, 
    PartnersRoutingModule
  ],
  declarations: [
    PartnerGroupComponent,
    PartnerListComponent
  ],
  exports: [
    PartnerGroupComponent
  ]
})
export class PartnersModule {

}