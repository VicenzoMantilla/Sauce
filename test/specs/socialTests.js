const Inventory = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');
const socialMedia = require('../pageobjects/socialMedia.page');

describe('Test for the social media logos', () => {
  beforeEach('Open for test',()=>{
    LoginPage.open();
    LoginPage.standarUser();
  });
  it('Test if the twitter logo redirects to the expected page',  () => {
    socialMedia.twitterClick();
    browser.switchWindow('twitter.com')
    expect(browser).toHaveUrl('https://twitter.com/saucelabs');
    });
  it('Test if the facebook logo redirects to the expected page',  () => {
    socialMedia.facebookClick();
    browser.switchWindow('facebook.com')
    expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
    });
  it('Test if the linkedin logo redirects to the expected page',  () => {
    socialMedia.linkedinClick();
    browser.switchWindow('linkedin.com')
    expect(browser).toHaveUrlContaining('https://www.linkedin.com/authwall?trk');
  });
});