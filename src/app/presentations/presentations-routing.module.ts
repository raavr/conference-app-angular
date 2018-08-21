import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PresentationListComponent } from './';
import { PresentationListResolver } from './presentation-list/presentation-list.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '', 
        component: PresentationListComponent, 
        resolve: { 
          presentations: PresentationListResolver 
        } 
      }
    ])
  ],
  exports: [RouterModule],
  providers: [PresentationListResolver]
})
export class PresentationsRoutingModule {

}