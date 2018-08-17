import {
  async,
  inject,
  TestBed
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { SpeakerService } from '../speakers/speaker/speaker.service';
import { PartnerService } from '../partners/partner/partner.service';
import { NewsService } from '../news/news/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Speaker } from '../speakers/speaker/speaker';
import { PartnerGroup } from '../partners/partner/partner-group';
import { HomeComponent } from './home.component';
import { 
  MAX_SPEAKER_HOMEPAGE, 
  MAX_PARTNERGROUP, 
  MAX_NEWS_HOMEPAGE 
} from '../app.constant';
import { News } from '../news/news/news';

const speakersMock: Speaker[] = [{
  id: 1,
  name: "Test",
  surname: "Testy",
  company: "Test Corp",
  img: "test",
  desc: "Lorem ipsum"
},
{
  id: 2,
  name: "Test2",
  surname: "Testy",
  company: "Test Corp",
  img: "test",
  desc: "Lorem ipsum"
},
{
  id: 3,
  name: "Test3",
  surname: "Testy",
  company: "Test Corp",
  img: "test",
  desc: "Lorem ipsum"
},
{
  id: 4,
  name: "Test4",
  surname: "Testy",
  company: "Test Corp",
  img: "test",
  desc: "Lorem ipsum"
}
];

const partnerGroupMock: PartnerGroup[] = [
  {
    items: [{
      companyName: "Company Name",
      id: 1,
      img: "sponsor-1",
      type: "platinum"
    }],
    type: "platinum"
  },
  {
    items: [
      {
        companyName: "Company Name",
        id: 2,
        img: "sponsor-2",
        type: "gold"
      },
      {
        companyName: "Company Name",
        id: 3,
        img: "sponsor-3",
        type: "gold"
      }
    ],
    type: "gold"
  },
  {
    items: [
      {
        companyName: "Company Name",
        id: 4,
        img: "sponsor-4",
        type: "silver"
      },
      {
        companyName: "Company Name",
        id: 5,
        img: "sponsor-5",
        type: "silver"
      }
    ],
    type: "silver"
  }
];

const newsMock: News[] = [
  {
    "id": 1,
    "title": "Become a sponsore",
    "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "date": 1482447838000
  },
  {
    "id": 2,
    "title": "What do you really want?",
    "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "date": 1482447838000
  },
  {
    "id": 3,
    "title": "Who are you?",
    "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "date": 1482447838000
  },
  {
    "id": 4,
    "title": "Hello world",
    "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "date": 1482447838000
  }
];

class MockSpeakerService {
  getSpeakers(): Observable<Speaker[]> {
    return Observable.of(speakersMock);
  }
}

class MockPartnerService {
  getPartners(): Observable<PartnerGroup[]> {
    return Observable.from(partnerGroupMock)
      .take(MAX_PARTNERGROUP.HOMEPAGE)
      .toArray();
  }
}

describe('Home', () => {

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: (
          backend: ConnectionBackend, 
          defaultOptions: BaseRequestOptions
        ) => new Http(backend, defaultOptions),
        deps: [
          MockBackend, 
          BaseRequestOptions
        ]
      },
      HomeComponent,
      { provide: SpeakerService, useClass: MockSpeakerService },
      { provide: PartnerService, useClass: MockPartnerService },
      NewsService
    ]
  }));


  it('should set speakers', async(inject([HomeComponent], (home: HomeComponent) => {
    expect(home.speakers).not.toBeDefined();
    home.ngOnInit();

    const speakersHomepage = speakersMock.slice(0, 3);
    expect(home.speakers).toEqual(speakersHomepage);
  })));

  it('should set only few speakers (determined by MAX_HOMEPAGE value)', async(inject([HomeComponent], (home: HomeComponent) => {
    expect(home.speakers).not.toBeDefined();
    home.ngOnInit();
    expect(home.speakers.length).toEqual(MAX_SPEAKER_HOMEPAGE);
  })));

  it('should set partners', async(inject([HomeComponent], (home: HomeComponent) => {
    expect(home.partnersGroups).not.toBeDefined();
    home.ngOnInit();
    const partnersGrouponHomepage = partnerGroupMock.slice(0, 2);
    expect(home.partnersGroups).toEqual(partnersGrouponHomepage);
  })));

  describe("when getNews()", () => {
    let newsService: NewsService;
    let home: HomeComponent;
    let spy: jasmine.Spy;

    beforeEach(inject([NewsService, HomeComponent], (ns: NewsService, homeComp: HomeComponent) => {
      newsService = ns;
      home = homeComp;
      spy = spyOn(newsService, 'getNews').and.returnValue(Observable.of(newsMock));
    }));

    it('should call getNews method', () => {
      expect(newsService.getNews).not.toHaveBeenCalled();
      home.ngOnInit();
      expect(newsService.getNews).toHaveBeenCalled();
    });

    it('should set only few news (determined by MAX_HOMEPAGE value)', () => {
      expect(home.news).not.toBeDefined();
      home.ngOnInit();
      expect(home.news.length).toBe(MAX_NEWS_HOMEPAGE);
    });

    it('should set empty array of news', () => {
      spy.and.returnValue(Observable.of([]));
      expect(home.news).not.toBeDefined();
      home.ngOnInit();
      expect(home.news.length).toBe(0);
    });

    it('should set news', () => {
      expect(home.news).not.toBeDefined();
      home.ngOnInit();

      const newsHomePage = newsMock.slice(0, 3);
      expect(home.news).toEqual(newsHomePage);
    });
  });
});
