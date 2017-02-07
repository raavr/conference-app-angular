import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailComponent, NewsCategoriesComponent, NewsListComponent, NewsComponent } from './'
import { MaxLenPipe } from './news/news-len.pipe';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
    imports: [
        CommonModule,
        NewsRoutingModule
    ],
    declarations: [
        NewsDetailComponent,
        NewsCategoriesComponent,
        NewsListComponent,
        NewsComponent,
        MaxLenPipe
    ],
    exports: [
        MaxLenPipe
    ]
})
export class NewsModule {

}