import { Routes } from '@angular/router'
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { 
    path: 'news', 
    loadChildren: '/app/news/news.module#NewsModule' 
  },
  { 
    path: '**', 
    component: NoContentComponent 
  }
];
