import { browser, by, element } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    // change hash depending on router LocationStrategy
    browser.get('/#/home');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Angular 2 - JS Conference';
    expect(subject).toEqual(result);
  });

  it('should have `JS Conference`', () => {
    let subject = element(by.css('.app-section-title')).getText();
    let result  = 'JS Conference';
    expect(subject).toEqual(result);
  });


});
