
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