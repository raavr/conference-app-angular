import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { NewsDetailResolver } from './news-detail/news-detail.resolver';
import { NewsListResolver } from './news-list/news-list.resolver';
import { NewsListComponent, NewsDetailComponent } from './';
import { NewsService } from './news/news.service';

@NgModule({
    imports: [
        RouterModule.forChild([
                { path: 'news', component: NewsListComponent, resolve: {news : NewsListResolver }},
                { path: 'news/:id', component: NewsDetailComponent, resolve: { news: NewsDetailResolver }},
        ])
    ],
    exports: [ RouterModule ],
    providers: [ NewsService, NewsListResolver, NewsDetailResolver ]
})
export class NewsRoutingModule {

}