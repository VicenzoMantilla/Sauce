class Inventory {
    
    get menuButton () { return $('div[class="bm-burger-button"]>button[id="react-burger-menu-btn"]') };
    get logoutLink () { return $('nav[class="bm-item-list"]>a[id="logout_sidebar_link"]') };
    get dogImg  () { return $('a[id="item_4_img_link"]')}

    logout(){
        this.menuButton.click();
        this.logoutLink.click();
    };

}
module.exports = new Inventory();