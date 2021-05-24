
class Checkout {
    //Checkout part 1
    get firstName () {
        return $('#first-name')
    };
    get lastName () {
        return $('#last-name')
    };
    get postalCode () {
        return $('#postal-code')
    };
    get cancelBtn () {
        return $('form > div.checkout_buttons > button#cancel')
    };
    get continueBtn () {
        return $('form > div.checkout_buttons > input#continue')
    };
    get textError () {
        return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3').getText()
    };
    get buttonError () {
        return $('form > div > div.error-message-container.error > h3 > button.error-button')
    };
    //Checkout part 2
    get totalAmount () {
        return $('#checkout_summary_container > div > div.summary_info > div.summary_total_label').getText()
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
    // Functions

    setName(name){
        this.firstName.click();
        this.firstName.setValue(name)
    };
    setLastName(lastname){
        this.lastName.click()
        this.lastName.setValue(lastname)
    };
    setPostalCode(number){
        this.postalCode.click()
        this.postalCode.setValue(number)
    };
} 
module.exports = new Checkout();