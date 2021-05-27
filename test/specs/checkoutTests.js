const Checkout = require('../pageobjects/checkout.page');
const Cart = require('../pageobjects/cart.page');
const LoginPage = require('../pageobjects/login.page');
const Inventory = require('../pageobjects/inventory.page');

describe('Test for checkout part 1 page',()=>{
    beforeEach('Open for checkout',()=>{
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
            expect(Checkout.textError).toEqual("Error: First Name is required");
            browser.pause(2000);
        });
        it('Try to checkout without a LastName',()=>{
            Checkout.setName("Vicenzo");
            Checkout.setPostalCode("2000");
            Checkout.continueBtn.click();
            expect(Checkout.textError).toEqual("Error: Last Name is required");
            browser.pause(2000);
        });
        it('Try to checkout without a PostalCode',()=>{
            Checkout.setName("Vicenzo");
            Checkout.setLastName("Mantilla");
            Checkout.continueBtn.click();
            expect(Checkout.textError).toEqual("Error: Postal Code is required");
            browser.pause(2000);
        });
        it('Give valid info and continue with the purchase',()=>{
            Checkout.setName("Vicenzo");
            Checkout.setLastName("Mantilla");
            Checkout.setPostalCode("2000");
            Checkout.continueBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-two.html");
        });
        it('Remove an item and go back to the checkout page',()=>{
            Checkout.setName("Vicenzo");
            Checkout.cancelBtn.click();
            Cart.removeBtn.click();
            Cart.checkoutBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-step-one.html");
        });
        it('Go back to the cart page with the cancel button',()=>{
            Checkout.setName("Vicenzo");
            Checkout.setLastName("Mantilla");
            Checkout.setPostalCode("2000");
            Checkout.cancelBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
            Inventory.menuButton.click();
            Inventory.resetAppState.click();
            Inventory.logoutLink.click();
        });
    });
});

describe('Test for checkout part 2 page',()=>{
    beforeEach('Open for checkout part 2',()=>{
        LoginPage.open();
        LoginPage.standarUser();
        Inventory.addItemsToTheCart();
        Inventory.cartButton.click();
        Cart.checkoutBtn.click();
        Checkout.setInputs();
    });
    describe('Checkout Buttons and texts',()=>{
        it('Test the amount of all the products',()=>{
            expect(Checkout.totalAmount).toEqual("Item total: $129.94");
        });
        it('Check if the finish button redirects to the correct page.',()=>{
            Checkout.finishBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
            browser.back();
        });
        it('Test if the cart gets empty after click on the finish button',()=>{
            Checkout.finishBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/checkout-complete.html");
            expect(Inventory.cartNumberEmpty).toHaveChildren(0);
            browser.back();
        })
        it('Check if the cancel button redirects to the correct page.',()=>{
            Checkout.secondCancelBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
            browser.back();
        });
        it('The back home button should return to the Inventory page',()=>{
            Checkout.finishBtn.click();
            Checkout.backhomeBtn.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        });
    });
});