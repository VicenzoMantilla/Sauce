
class socialMedia{
  get twitterBtn() {
    return $('li.social_twitter > a')
  }
  get facebookBtn() {
    return $('li.social_facebook > a')
  }
  get linkedinBtn() {
    return $('li.social_linkedin >a')
  }
  get footerTitle() {
    return $('div.footer_copy') 
  }
  get imgFooter() {
    return $('img.footer_robot')
  }
  get productsTitle() { 
    return $('span.title')
  }

  twitterClick() {
    this.twitterBtn.click()
  }
  facebookClick() {
    this.facebookBtn.click()
  }
  linkedinClick() {
    this.linkedinBtn.click()
  }
}

module.exports = new socialMedia()