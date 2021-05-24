const Cart = require('../pageobjects/cart.page');
const Inventory = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');

describe('Test for the Cart',()=>{
    beforeAll('Open and get access to the cart page',()=>{
        LoginPage.open();
        LoginPage.standarUser();
        Inventory.addItemsToTheCart();
        Inventory.cartButton.click();
    });
    describe('Check the cart page',()=>{
        it('The url must be correct',()=>{
            expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
        });
        it('Check if the link redirect to the inventory page',()=>{
            Cart.continueShoppingBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
            browser.back();
        });
        it('Prove that the Checkout link redirects to the correct page',()=>{
            Cart.checkoutBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-one.html");
            browser.back();
        });
    });
    describe('Check for the items added',()=>{
        it('The quantity of items must match the number of the cart',()=>{
            expect(Cart.quantityOfItems.length).toEqual(parseInt(Cart.numberOfItemsInCart));
        });
        
    });
});