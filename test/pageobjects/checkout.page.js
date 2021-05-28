
class Checkout {
    //Checkout part 1
    get firstName () {
        return $('input#first-name')
    };
    get lastName () {
        return $('input#last-name')
    };
    get postalCode () {
        return $('input#postal-code')
    };
    get cancelBtn () {
        return $('form > div.checkout_buttons > button#cancel')
    };
    get continueBtn () {
        return $('form > div.checkout_buttons > input')
    };
    get textError () {
        return $('div.error-message-container > h3').getText()
    };
    get buttonError () {
        return $('form > div > div.error-message-container.error > h3 > button.error-button')
    };
    //Checkout part 2
    get totalAmount () {
        return $('#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label').getText()
    };
    get secondCancelBtn () {
        return $('#checkout_summary_container > div > div.summary_info > div.cart_footer > button#cancel')
    };
    get finishBtn () {
        return $('#checkout_summary_container > div > div.summary_info > div.cart_footer > button#finish')
    };
    get backhomeBtn () {
        return $('#contents_wrapper > div.checkout_complete_container > button#back-to-products')
    };
    get arrayOfPrices () {
        return $$('div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div.inventory_item_price')
    };
    // Functions
    setName(name){
        this.firstName.click();
        this.firstName.setValue(name);
    };
    setLastName(lastname){
        this.lastName.click();
        this.lastName.setValue(lastname);
    };
    setPostalCode(number){
        this.postalCode.click();
        this.postalCode.setValue(number);
    };
    setInputs(){
        this.firstName.click();
        this.firstName.setValue("Vicenzo");
        this.lastName.click();
        this.lastName.setValue("Mantilla");
        this.postalCode.click();
        this.postalCode.setValue("2000");
        this.continueBtn.click();
    };
} 
module.exports = new Checkout();