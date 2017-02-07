import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { NewsService } from '../news/news.service';
import { News } from '../news/news';
import { Observable } from 'rxjs/Observable';
import { TOTAL_NEWS } from '../../app.constant';

@Injectable()
export class NewsListResolver implements Resolve<any> {
  constructor(private newsService: NewsService, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<News[]> {
    return this.newsService.getNews().flatMap(ns => Observable.from(ns)).take(TOTAL_NEWS).toArray();
  }
}
