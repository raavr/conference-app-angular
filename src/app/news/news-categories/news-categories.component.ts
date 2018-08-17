import { Component } from '@angular/core';

@Component({
  selector: 'news-categories',
  template: `
    <div class="col-sm-12 col-md-11 category-container">
      <h4>Categories</h4>
      <a href="#" title="News" [routerLink]="['/news']">News</a>
    </div>
  `,
  styleUrls: ['./news-categories.component.scss']
})
export class NewsCategoriesComponent {

}