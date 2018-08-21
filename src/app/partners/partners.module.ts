import { NgModule } from '@angular/core';
import { PartnerListComponent } from './';
import { PartnersRoutingModule } from './partners-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PartnersRoutingModule
  ],
  declarations: [
    PartnerListComponent
  ]
})
export class PartnersModule {

}