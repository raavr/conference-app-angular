import {
   async, inject, TestBed
} from '@angular/core/testing';

import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import {
  HttpModule, Http, XHRBackend, Response, ResponseOptions
} from '@angular/http';


import { Speaker } from './speaker';
import { SpeakerService } from './speaker.service';

const fakeSpeakers: Speaker[] = [{ 
    id: 1, 
    name: "Test", 
    surname: "Testy", 
    company: "Test Corp", 
    img: "speaker-1", 
    desc: "Lorem ipsum"
}, { 
    id: 2, 
    name: "Temp", 
    surname: "Temppy", 
    company: "Temp Corp", 
    img: "speaker-2", 
    desc: "Lorem ipsum"
}];

describe("SpeakerService", () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ HttpModule ],
            providers: [
                SpeakerService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        })
        .compileComponents();
    }));

    it('can instantiate service when inject service',
        inject([SpeakerService], (service: SpeakerService) => {
        expect(service instanceof SpeakerService).toBe(true);
    }));

    it('can instantiate service with "new"', inject([Http], (http: Http) => {
        expect(http).not.toBeNull();
        let service = new SpeakerService(http);
        expect(service instanceof SpeakerService).toBe(true);
    }));

    it('can provide the mockBackend as XHRBackend',
        inject([XHRBackend], (backend: MockBackend) => {
            expect(backend).not.toBeNull();
    }));

     describe('when getSpeakers()', () => {
        let mockBackend: MockBackend;
        let service: SpeakerService;
        let mockSpeakers: Speaker[];
        let response: Response;

        beforeEach(inject([Http, XHRBackend], (http: Http, mbackend: MockBackend) => {
            mockBackend = mbackend;
            service = new SpeakerService(http);
            mockSpeakers = fakeSpeakers;
            let options = new ResponseOptions({status: 200, body: {speakers: mockSpeakers}});
            response = new Response(options);
        }));

        it('should have expected number of mock speakers', async(inject([], () => {
            mockBackend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

            service.getSpeakers()
                .subscribe(speakers => {
                    expect(speakers.length).toBe(mockSpeakers.length);
                });
        })));

        it('should not return any speakers', async(inject([], () => {
            let resp = new Response(new ResponseOptions({status: 200, body: { speakers : []}}));
            mockBackend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

            service.getSpeakers()
            .subscribe(speakers => {
                expect(speakers.length).toBe(0);
            });

        })));

     });
});