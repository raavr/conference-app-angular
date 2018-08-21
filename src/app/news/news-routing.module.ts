import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsDetailResolver } from './news-detail/news-detail.resolver';
import { NewsListResolver } from './news-list/news-list.resolver';
import { NewsListComponent, NewsDetailComponent, NewsOutletComponent } from './';

const routes: Routes = [
  {
    path: '',
    component: NewsOutletComponent,
    children: [
      { 
        component: NewsListComponent, 
        path: '', 
        resolve: { 
          news: NewsListResolver 
        } 
      },
      { 
        path: ':id', 
        component: NewsDetailComponent, 
        resolve: { 
          news: NewsDetailResolver 
        }
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    NewsListResolver, 
    NewsDetailResolver
  ]
})
export class NewsRoutingModule {

}