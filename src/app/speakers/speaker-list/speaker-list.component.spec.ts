import {
  async,
  inject,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';

import { Speaker } from '../speaker/speaker';

// Load the implementations that should be tested
import { SpeakerListComponent } from './speaker-list.component';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ActivatedRouteStub } from '../../app.routes-stub';

describe("SpeakerList", () => {

  let comp: SpeakerListComponent;
  let fixture: ComponentFixture<SpeakerListComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let expectedSpeaker: Speaker;
  let activatedRoute: ActivatedRouteStub;
  let mockSpeakers: Speaker[];

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
    mockSpeakers = [{
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
    activatedRoute.testData = { speakers: mockSpeakers };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpeakerListComponent],
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerListComponent);
    comp = fixture.componentInstance;
  });

  it('should set speakers', () => {
    expect(comp.speakers).not.toBeDefined();
    fixture.detectChanges();

    expect(comp.speakers).toEqual(mockSpeakers);
  });

  it('should not have selectedSpeaker', () => {
    fixture.detectChanges();
    expect(comp.selectedSpeaker).not.toBeDefined();
  });

  it('should select speaker when speaker-item clicked', () => {
    fixture.detectChanges();
    expect(comp.speakers).toEqual(mockSpeakers);
    expect(comp.selectedSpeaker).not.toBeDefined();

    de = fixture.debugElement.queryAll(By.css('speaker-item'))[1];
    de.triggerEventHandler("click", null);

    expect(comp.selectedSpeaker).toBe(comp.speakers[1]);
  })
});