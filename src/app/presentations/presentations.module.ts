import { NgModule } from '@angular/core';
import { PresentationListComponent } from './';
import { PresentationsRoutingModule } from './presentations-routing.module';
import { PresentationService } from './presentation/presentation.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    PresentationsRoutingModule
  ],
  declarations: [
    PresentationListComponent,
  ],
  providers: [
    PresentationService
  ]
})
export class PresentationsModule {

}