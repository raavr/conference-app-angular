import {
  async,
  inject,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { Observable } from 'rxjs/Observable';

// Load the implementations that should be tested
import { FullAgendaComponent } from './full-agenda.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AgendaModalService } from './agenda-modal.service'; 
import { AgendaModalStub } from './agenda-modal-stub.service';
import { ActivatedRouteStub } from '../../app.routes-stub';
import { AGENDA as fakeAgenda } from '../agenda/fake-agenda';
import { Speaker } from '../../speakers/speaker/speaker';

describe("FullAgenda", () => {

    let comp:            FullAgendaComponent;
    let fixture:         ComponentFixture<FullAgendaComponent>;
    let de:              DebugElement;
    let el:              HTMLElement;
    let activatedRoute:  ActivatedRouteStub;
    let agendaModal:     AgendaModalStub;
    let selectedSpeaker: Speaker;

    beforeEach(async(() => {
        selectedSpeaker = { 
            id: 1, 
            name: "Test", 
            surname: "Testy", 
            company: "Test Corp", 
            img: "speaker-1", 
            desc: "Lorem ipsum"
        };
        activatedRoute = new ActivatedRouteStub();
        activatedRoute.testData = { agenda: fakeAgenda };

        agendaModal = new AgendaModalStub();
        agendaModal.testSelectedSpeaker = selectedSpeaker;

    }));

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [ FullAgendaComponent ],
            providers: [ 
                { provide: ActivatedRoute, useValue: activatedRoute }
             ],
            schemas:      [NO_ERRORS_SCHEMA]
        })
        .overrideComponent(FullAgendaComponent, {
            set: {
                providers: [
                    { provide: AgendaModalService, useValue: agendaModal }
                ]
            }
        }).compileComponents();

    }));
    
    beforeEach(() => {

        fixture = TestBed.createComponent(FullAgendaComponent);
        comp = fixture.componentInstance;
                
    });

    it('should set agenda', () => {
       
        expect(comp.agenda).not.toBeDefined();
        fixture.detectChanges();
        expect(comp.agenda).toEqual(fakeAgenda[0]);
        
    });

    it('should set days name', () => {
       
        expect(comp.daysName).not.toBeDefined();
        fixture.detectChanges();
        expect(comp.daysName).toEqual(fakeAgenda[1]);
        
    });

    it('should select speaker', async(() => {
        expect(comp.selectedSpeaker).not.toBeDefined();
        fixture.detectChanges();
        expect(comp.selectedSpeaker).toBe(selectedSpeaker);
    }));

    it('should compute with of dayName element', () => {
        comp.daysName = ['one day', 'two day', 'three day'];
        let calculatedWidth = comp.computeDayNameWidth();
        expect(calculatedWidth).toEqual("33%");
    });

    it('should compute width of dayName element when daysName is empty', () => {
        comp.daysName = [];
        let calculatedWidth = comp.computeDayNameWidth();
        expect(calculatedWidth).toEqual('0%');
    });

    it('should initially set activeDay to default value', () => {
        expect(comp.activeDay).not.toBeDefined();
        fixture.detectChanges();
        expect(comp.activeDay).toBe(0);
    });

    it('should display agenda day', () => {
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css(".days-item"));
        el = de.nativeElement;
        
        expect(el.textContent).toContain('day one'.toUpperCase());
    });
    
});