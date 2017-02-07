import { Component } from '@angular/core';
import { News } from '../news/news';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'news-detail',
    styleUrls: ['./news-detail.component.scss'],
    templateUrl: './news-detail.component.html'
})
export class NewsDetailComponent {
    news: News;

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {

        this.route.data
            .subscribe((data: { news: News }) => {
                this.news = data.news;
            });
        }
}