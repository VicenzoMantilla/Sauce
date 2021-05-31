const LoginPage = require('../pageobjects/login.page');
const socialMedia = require('../pageobjects/socialMedia.page');

describe('Test for the social media logos', () => {
  beforeEach('Open for test',()=>{
    LoginPage.open();
    LoginPage.standarUser();
  });
  describe('Checking elements existance', () => {
    it('Verify the footer text is correct', () => {
        expect(socialMedia.footerTitle).toHaveTextContaining(' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy');
    });
    it('Verify if the footer image is displayed', () => {
        expect(socialMedia.imgFooter).toBeDisplayed();
    });
    it('Verify the title for the products', () => {
        expect(socialMedia.productsTitle).toHaveText('PRODUCTS');
    });
  });
  describe('Test for the social media links',()=>{
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
      expect(browser).toHaveUrlContaining('https://www.linkedin.com/company/sauce-labs/');
    });
  });
});