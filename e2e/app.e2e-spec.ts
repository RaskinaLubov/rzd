import { RzdPage } from './app.po';

describe('rzd App', () => {
  let page: RzdPage;

  beforeEach(() => {
    page = new RzdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
