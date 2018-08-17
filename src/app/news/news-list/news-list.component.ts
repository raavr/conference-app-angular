import { Component } from '@angular/core';
import { News } from '../news/news';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'news-list',
  styleUrls: ['./news-list.component.scss'],
  templateUrl: './news-list.component.html'
})
export class NewsListComponent {
  news: News[];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { news: News[] }) => {
        this.news = data.news;
      });
  }
}