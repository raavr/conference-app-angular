import {
  async,
  inject,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { Speaker } from '../speaker/speaker';

// Load the implementations that should be tested
import { SpeakerItemComponent } from './speaker-item.component';

describe("SpeakerItem", () => {

    let comp:            SpeakerItemComponent;
    let fixture:         ComponentFixture<SpeakerItemComponent>;
    let de:              DebugElement;
    let el:              HTMLElement;
    let expectedSpeaker: Speaker;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [ SpeakerItemComponent ]
        }).compileComponents()
    }));
    
    beforeEach(() => {

        fixture = TestBed.createComponent(SpeakerItemComponent);
        comp = fixture.componentInstance;

        expectedSpeaker = { 
            id: 1, 
            name: "Test", 
            surname: "Testy", 
            company: "Test Corp", 
            img: "speaker-1", 
            desc: "Lorem ipsum"
        };
    
    });

    it('should initially not show a speaker', () => {

        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('.speaker-item'));

        expect(de).toEqual(null);
        
    });

    it('should show speaker name', () => {

        comp.speaker = expectedSpeaker;
        fixture.detectChanges();

        de = fixture.debugElement.query(By.css('.speaker-name'));
        el = de.nativeElement;

        expect(el.textContent).toContain(expectedSpeaker.name + " " + expectedSpeaker.surname);
        
    });

});