import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { News } from './news';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsService {

  constructor(public http: Http) {

  }

  getNews(): Observable<News[]> {
    return this.http.get("/assets/mock-data/mock-news.json")
      .map(res => res.json().news as News[])
  }

  getSingleNews(id: number): Observable<News> {
    return this.getNews()
      .flatMap(ns => Observable.from(ns))
      .filter(ns => ns.id === id);
  }
}
