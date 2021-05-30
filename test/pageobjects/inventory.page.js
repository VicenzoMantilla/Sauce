const LoginPage = require('../pageobjects/login.page')
class Inventory{
    // Top-left Menu
    get closeMenu () {
        return $('#react-burger-cross-btn')
    };
    get resetAppState () {
        return $('nav.bm-item-list > #reset_sidebar_link')
    };
    get about () {
        return $('nav.bm-item-list > #about_sidebar_link')
    };
    get allItems () {
        return $('nav.bm-item-list > #inventory_sidebar_link')
    };
    get menuButton () {
        return $('div.bm-burger-button > #react-burger-menu-btn')
    };
    get logoutLink () { 
        return $('nav[class="bm-item-list"]>a[id="logout_sidebar_link"]')
    };
    get cartLink () {
        return $('div.primary_header > #shopping_cart_container > a.shopping_cart_link')
    ;}
    // List options
    get listSelect (){
        return $('#header_container > div.header_secondary_container > div.right_component > span > select')
    };
    get nameAtoZ (){
        return $('#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(1)')
    };
    get nameZtoA (){
        return $('#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(2)')
    };
    get priceLowToHigh (){
        return $('#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(3)')
    };
    get priceHighToLow (){ 
        return $('#header_container > div.header_secondary_container > div.right_component > span > select > option:nth-child(4)')
    };
    //Product Description
    get backpackDescriptionPage(){
        return $('#item_4_title_link')
    }
    //Images
    get dogImg (){
        return $('div.inventory_list > div.inventory_item > div.inventory_item_img > a > img').getAttribute('src')
    }
    //Array Item Names
    get arraynames() {
        return $$('#inventory_container > div.inventory_list > div.inventory_item')
    };
    //Button of Cart
    get cartButton (){
        return $('#shopping_cart_container > a')
    };
    //Number of the cart, total items
    get NumberCartItems (){
        return $('#shopping_cart_container > a > span').getText()
    };
    get cartNumberEmpty (){
        return $('#shopping_cart_container > a ')
    };
    //Butons add items
    get addItems () {
        return $$('#inventory_container > div.inventory_list > div.inventory_item > div.inventory_item_description > div.pricebar > button')
    };
    //Button remove items 
    get removeItems() {
        return $$('#inventory_container > div.inventory_list > div.inventory_item > div.inventory_item_description > div.pricebar > button[class="btn btn_secondary btn_small btn_inventory"]')
    };
    //Functions
    selectAtoZ(){
        this.listSelect.click();
        this.nameAtoZ.click();
    };
    selectZtoA(){
        this.listSelect.click();
        this.nameZtoA.click();
    };
    selectPriceLowToHigh(){
        this.listSelect.click();
        this.priceLowToHigh.click();
    };
    selectPriceHighToLow(){
        this.listSelect.click();
        this.priceHighToLow.click();
    };
    selectChildItem(i){
        return $('#inventory_container > div.inventory_list > div.inventory_item:nth-child('+i+') > div.inventory_item_description > div.inventory_item_label > a > div.inventory_item_name').getText()
    };
    selectChildPrice(i){
        return $ ('#inventory_container > div.inventory_list > div.inventory_item:nth-child('+i+') > div.inventory_item_description > div.pricebar > div').getText()
    };
    addItemsToTheCart(){
        this.addItems.forEach(element => {
            element.click();
        });
    };
    removeItemsOfTheCart(){
        this.removeItems.forEach(element => {
            element.click();
        });
    };
    logout(){
        this.menuButton.click();
        this.logoutLink.click();
    };
};
module.exports = new Inventory();