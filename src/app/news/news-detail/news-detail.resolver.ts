import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { NewsService } from '../news/news.service';
import { News } from '../news/news';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsDetailResolver implements Resolve<any> {
  constructor(private newsService: NewsService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<News> {
    const id = route.params['id'];  
    return this.newsService.getSingleNews(+id);
    
  }
}
