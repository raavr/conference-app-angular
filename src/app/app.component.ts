import { Component, ViewEncapsulation } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.scss'
  ],
  template: `
    <div class="app-wrapper">
      <navbar></navbar>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `
})
export class AppComponent {

}

