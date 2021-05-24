const Inventory = require('../pageobjects/inventory.page');
const LoginPage = require('../pageobjects/login.page');

describe('Inventory tests',()=>{
    beforeAll('Open saucedemo and login',()=>{
        LoginPage.open();
        LoginPage.standarUser();
    });
    describe('Test for the products',()=>{
        it('Order of the products(A to Z)',()=>{
            Inventory.selectAtoZ();
            expect(Inventory.selectChildItem(1)).toEqual("Sauce Labs Backpack");
            expect(Inventory.selectChildItem(2)).toEqual("Sauce Labs Bike Light");
            expect(Inventory.selectChildItem(3)).toEqual("Sauce Labs Bolt T-Shirt");
            expect(Inventory.selectChildItem(4)).toEqual("Sauce Labs Fleece Jacket");
            expect(Inventory.selectChildItem(5)).toEqual("Sauce Labs Onesie");
            expect(Inventory.selectChildItem(6)).toEqual("Test.allTheThings() T-Shirt (Red)");
        });
        it('Order of the products(Z to A)',()=>{
            Inventory.selectZtoA();
            expect(Inventory.selectChildItem(1)).toEqual("Test.allTheThings() T-Shirt (Red)");
            expect(Inventory.selectChildItem(2)).toEqual("Sauce Labs Onesie");
            expect(Inventory.selectChildItem(3)).toEqual("Sauce Labs Fleece Jacket");
            expect(Inventory.selectChildItem(4)).toEqual("Sauce Labs Bolt T-Shirt");
            expect(Inventory.selectChildItem(5)).toEqual("Sauce Labs Bike Light");
            expect(Inventory.selectChildItem(6)).toEqual("Sauce Labs Backpack");
        });
        it('Order the price of the products(Low to High)',()=>{
            Inventory.selectPriceLowToHigh();
            expect(Inventory.selectChildPrice(1)).toEqual("$7.99");
            expect(Inventory.selectChildPrice(2)).toEqual("$9.99");
            expect(Inventory.selectChildPrice(3)).toEqual("$15.99");
            expect(Inventory.selectChildPrice(4)).toEqual("$15.99");
            expect(Inventory.selectChildPrice(5)).toEqual("$29.99");
            expect(Inventory.selectChildPrice(6)).toEqual("$49.99");
        });
        it('Order the price of the products(High to Low)',()=>{
            Inventory.selectPriceHighToLow();
            expect(Inventory.selectChildPrice(1)).toEqual("$49.99");
            expect(Inventory.selectChildPrice(2)).toEqual("$29.99");
            expect(Inventory.selectChildPrice(3)).toEqual("$15.99");
            expect(Inventory.selectChildPrice(4)).toEqual("$15.99");
            expect(Inventory.selectChildPrice(5)).toEqual("$9.99");
            expect(Inventory.selectChildPrice(6)).toEqual("$7.99");
        });
    });
    describe('Test for the cart',()=>{
        it('Add all the items to the cart and check the number of items added',()=>{
            Inventory.addItemsToTheCart();
            expect(parseInt(Inventory.NumberCartItems)).toBe(6);
        });
        it('Remove all the items of the cart and check the number of items removed',()=>{
            Inventory.removeItemsOfTheCart();
            expect(Inventory.cartNumberEmpty).toHaveChildren(0);
        });
        it('Check if the cart link works',()=>{
            Inventory.cartButton.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/cart.html");
            browser.back();
        });
    });
    describe('Test for the top left Menu',()=>{
        it('Go back to the main page after enter to the description of a product',()=>{
            Inventory.backpackDescriptionPage.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/inventory-item.html?id=4");
            Inventory.menuButton.click();
            Inventory.allItems.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        });
        it('Check that the RESET link removes the added products',()=>{
            Inventory.addItemsToTheCart();
            Inventory.menuButton.click();
            Inventory.resetAppState.click();
            expect(Inventory.cartNumberEmpty).toHaveChildren(0);
        })
        it('Check that the ABOUT link redirect to the correct url',()=>{
            Inventory.about.click();
            expect(browser).toHaveUrl("https://saucelabs.com/");
            browser.back();
        });
        it('Logout succesfully',()=>{
            Inventory.menuButton.click();
            Inventory.logoutLink.click();
            expect(browser).toHaveUrl("https://www.saucedemo.com/");
        })
    });
});