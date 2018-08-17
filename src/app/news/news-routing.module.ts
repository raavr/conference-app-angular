import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsDetailResolver } from './news-detail/news-detail.resolver';
import { NewsListResolver } from './news-list/news-list.resolver';
import { NewsListComponent, NewsDetailComponent, NewsOutletComponent } from './';
import { NewsService } from './news/news.service';

const routes: Routes = [
  {
    path: 'news',
    component: NewsOutletComponent,
    children: [
      { 
        path: '', 
        component: NewsListComponent, 
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
    NewsService, 
    NewsListResolver, 
    NewsDetailResolver
  ]
})
export class NewsRoutingModule {

}