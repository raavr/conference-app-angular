import { Component } from '@angular/core';
import { SpeakerService } from '../speakers/speaker/speaker.service';
import { Speaker } from '../speakers/speaker/speaker';
import { PartnerGroup } from '../partners/partner/partner-group';
import { PartnerService } from '../partners/partner/partner.service';
import { NewsService } from '../news/news/news.service';
import { News } from '../news/news/news';
import { Observable, Subject } from 'rxjs';
import { MAX_PARTNERGROUP, MAX_SPEAKER_HOMEPAGE, MAX_NEWS_HOMEPAGE } from '../app.constant';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  speakers: Speaker[];
  news: News[];
  partnersGroups: PartnerGroup[];
  private unsub$ = new Subject<void>();

  constructor(private speakerService: SpeakerService, 
              private partnerService: PartnerService, 
              private newsService: NewsService) {

  }

  ngOnInit() {

    this.speakerService.getSpeakers()
        .flatMap(ns => Observable.from(ns))
        .take(MAX_SPEAKER_HOMEPAGE)
        .toArray()
        .takeUntil(this.unsub$)
        .subscribe(speakers => this.speakers = speakers);

    this.partnerService.getPartners(MAX_PARTNERGROUP.HOMEPAGE)
        .takeUntil(this.unsub$)
        .subscribe(pg => this.partnersGroups = pg);

    this.newsService.getNews()
        .flatMap(ns => Observable.from(ns))
        .take(MAX_NEWS_HOMEPAGE)
        .toArray()
        .takeUntil(this.unsub$)
        .subscribe(ns => this.news = ns);

  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

}
