import {
  async,
  inject,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';
import { AppFooterComponent } from './app-footer.component';

describe("AppFooter", () => {

  let comp: AppFooterComponent;
  let fixture: ComponentFixture<AppFooterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppFooterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFooterComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css(".footer-nav-list > li"));
    el = de.nativeElement;
  });

  it('should display "Code of conduct" text', () => {
    expect(el.textContent).toContain("Code of conduct");
  })
});