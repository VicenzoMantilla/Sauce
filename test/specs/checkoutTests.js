const Checkout = require('../pageobjects/checkout.page')
const Cart = require('../pageobjects/cart.page')
const LoginPage = require('../pageobjects/login.page')
const Inventory = require('../pageobjects/inventory.page')

describe('Test for checkout part 1 page',()=>{
    beforeAll('Open for checkout',()=>{
        LoginPage.open();
        LoginPage.standarUser();
        Inventory.addItemsToTheCart();
        Inventory.cartButton.click();
        Cart.checkoutBtn.click();
    });
    describe('Checkout inputs',()=>{
        it('Try to checkout without a FirstName',()=>{
            Checkout.setLastName("Mantilla");
            Checkout.setPostalCode("2000");
            Checkout.continueBtn.click();
            expect(Checkout.textError).toHaveText("Error: First Name is required");
            browser.pause(2000);
            Checkout.buttonError.click();
        });
        it('Try to checkout without a LastName',()=>{
            Checkout.setName("Vicenzo");
            Checkout.setLastName("");
            Checkout.setPostalCode("2000");
            Checkout.continueBtn.click();
            expect(Checkout.textError).toHaveText("Error: Last Name is required");
            browser.pause(2000)
        });
        it('Try to checkout without a PostalCode',()=>{
            Checkout.setName("Vicenzo");
            Checkout.setLastName("Mantilla");
            Checkout.setPostalCode("");
            Checkout.continueBtn.click();
            expect(Checkout.textError).toHaveText("Error: Postal Code is required");
            browser.pause(2000)
        });
        it('Give valid info and continue with the purchase',()=>{
            Checkout.setName("Vicenzo");
            Checkout.setLastName("Mantilla");
            Checkout.setPostalCode("2000");
            Checkout.continueBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-two.html");
        });
    });
});