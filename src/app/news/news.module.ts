import { NgModule } from '@angular/core';
import { 
  NewsDetailComponent, 
  NewsCategoriesComponent, 
  NewsListComponent, 
  NewsComponent, 
  NewsOutletComponent 
} from './'
import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    NewsRoutingModule
  ],
  declarations: [
    NewsDetailComponent,
    NewsCategoriesComponent,
    NewsListComponent,
    NewsComponent,
    NewsOutletComponent
  ]
})
export class NewsModule {

}