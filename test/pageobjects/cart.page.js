
class Cart {
    get quantityOfItems () {
        return $$('#cart_contents_container > div > div.cart_list > div.cart_item')
    };
    get numberOfItemsInCart () { 
        return $('#shopping_cart_container > a.shopping_cart_link > span').getText()
    };
    get removeBtn (){
        return $('div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > button')
    };
    get continueShoppingBtn () { 
        return $('#continue-shopping')
    };
    get checkoutBtn () {
        return $('#checkout')
    };
    // Functions
    quantityCount (){
        this.quantityOfItems.forEach(element=>{
            element.getText();
        });
    };
};

module.exports = new Cart ();