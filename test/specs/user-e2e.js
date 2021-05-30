const LoginPage = require('../pageobjects/login.page');
const Inventory = require('../pageobjects/inventory.page');
const Cart = require('../pageobjects/cart.page');
const Checkout = require('../pageobjects/checkout.page')

describe('Testing for the purchase cycle',()=>{
    beforeAll('Open saucedemo and make the purchase and logout',()=>{
        LoginPage.open();
        LoginPage.standarUser();
        Inventory.addItemsToTheCart();
        Inventory.cartButton.click();
        Cart.removeBtn.click();
        Cart.continueShoppingBtn.click();
        Inventory.cartButton.click();
        Cart.checkoutBtn.click();
        Checkout.setInputs();
        Checkout.finishBtn.click();
    });
    it('Check for the tittle of the page',()=>{
        expect(Checkout.titleCheckout).toEqual('CHECKOUT: COMPLETE!');
    });
    it('Check for the URL of the page',()=>{
        expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
    });
    it('Check if the final message is correct',()=>{
        expect(Checkout.textCheckout).toEqual("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
    });
    it('Check for the header of the page',()=>{
        expect(Checkout.headerForCheckout).toEqual("THANK YOU FOR YOUR ORDER");
    });
    it('Log out of the page',()=>{
        Checkout.backhomeBtn.click();
        expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        Inventory.menuButton.click();
        Inventory.logoutLink.click();
        expect(browser).toHaveUrl("https://www.saucedemo.com/");
    });
});