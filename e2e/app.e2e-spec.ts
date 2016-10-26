import { FnbPocPage } from './app.po';

describe('fnb-poc App', function() {
  let page: FnbPocPage;

  beforeEach(() => {
    page = new FnbPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
