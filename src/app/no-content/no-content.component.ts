import { Component } from '@angular/core';

@Component({
  selector: 'no-content',
  styles: [`
      .no-content {
          margin-top: calc(70px + 1rem); 
          background-color: #eee; 
          min-height: 500px; 
          display: flex; 
          justify-content: center; 
          align-items: center;
      }
  `],
  template: `
    <section class="no-content">
      <h1>404: page missing</h1>
    </section>
  `
})
export class NoContentComponent {

}
