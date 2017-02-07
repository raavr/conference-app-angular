import { Component, Input } from '@angular/core';
import { News } from './news';

@Component({
    selector: 'news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent {
    @Input() news: News;
    @Input() onList: boolean;
}