import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { PresentationListComponent } from './';
import { PresentationListResolver } from './presentation-list/presentation-list.resolver';
import { PresentationService } from './presentation/presentation.service';

@NgModule({
    imports: [
        RouterModule.forChild([
              { path: 'presentations', component: PresentationListComponent, resolve: { presentations: PresentationListResolver } }
        ])
    ],
    exports: [ RouterModule ],
    providers: [ PresentationService, PresentationListResolver ]
})
export class PresentationsRoutingModule {

}