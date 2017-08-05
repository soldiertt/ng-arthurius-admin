import { NgArthuriusAdminPage } from './app.po';

describe('ng-arthurius-admin App', () => {
  let page: NgArthuriusAdminPage;

  beforeEach(() => {
    page = new NgArthuriusAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
