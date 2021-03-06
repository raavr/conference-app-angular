import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './';

@NgModule({
  imports: [
    RouterModule.forChild([
      { 
        path: '', 
        component: HomeComponent 
      },
      { 
        path: 'home', 
        redirectTo: ''
      },
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}