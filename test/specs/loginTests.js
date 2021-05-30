const LoginPage = require('../pageobjects/login.page');
const Inventory = require('../pageobjects/inventory.page');

describe('Saucedemo',()=>{
    beforeEach('Open saucedemo',()=>{
        LoginPage.open();
    });
    describe('Test wrong users',()=>{
        it('Show error with an undefined user',()=>{
            LoginPage.login(undefined);
            LoginPage.loginButton();
            expect(LoginPage.textErrorMessage).toHaveText("Epic sadface: Username is required");
            LoginPage.btnError();
        });
        it('Set a space as username give an error',()=>{
            LoginPage.login(" ");
            LoginPage.loginButton();
            expect(LoginPage.textErrorMessage).toHaveText("Epic sadface: Password is required");
            LoginPage.btnError();
        });
        it('Set numbers as username give an error',()=>{
            LoginPage.login("1234567");
            LoginPage.loginButton();
            expect(LoginPage.textErrorMessage).toHaveText("Epic sadface: Password is required");
            LoginPage.btnError();
        });
        it('Password with a lenght of 1',()=>{
            LoginPage.login("Vicenzo");
            LoginPage.password("d");
            LoginPage.loginButton();
            expect(LoginPage.textErrorMessage).toHaveText(
            "Epic sadface: Username and password do not match any user in this service");
            LoginPage.btnError();
        });
        it('A valid user with a wrong password give an error',()=>{
            LoginPage.login("standar_user");
            LoginPage.password("1234asd");
            LoginPage.loginButton();
            expect(LoginPage.textErrorMessage).toHaveText(
            "Epic sadface: Username and password do not match any user in this service");
            LoginPage.btnError();
        });
        it('Set the valid password with the wrong username, expect error',()=>{
            LoginPage.login("vicenzo");
            LoginPage.password("secret_sauce");
            LoginPage.loginButton();
            expect(LoginPage.textErrorMessage).toHaveText(
            "Epic sadface: Username and password do not match any user in this service");
            LoginPage.btnError();
        });
    });
    describe('Test for locked_out_user account',()=>{
        it('Give the wrong password',()=>{
            LoginPage.login("locked_out_user");
            LoginPage.password("vicenzo");
            LoginPage.loginButton();
            expect(LoginPage.textErrorMessage).toHaveText(
            "Epic sadface: Username and password do not match any user in this service");
            LoginPage.btnError();
        });
        it('Locked user entry with the right credentials',()=>{
            LoginPage.lockedOutUser();
            expect(LoginPage.textErrorMessage).toHaveText(
            "Epic sadface: Sorry, this user has been locked out.");
        });
    });
    describe('Test for performance_glitch_user',()=>{
        it('Wrong password for performance user',()=>{
            LoginPage.login("performance_glitch_user");
            LoginPage.password("vicenzo");
            LoginPage.loginButton();
            expect(LoginPage.textErrorMessage).toHaveText(
            "Epic sadface: Username and password do not match any user in this service");
        });
        it('Correct password for performance user',()=>{
            LoginPage.performanceUser();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            Inventory.logout();
        });
        it('Checks the performance required to log in', () => {
            LoginPage.performanceUser();
            browser.setTimeout({'pageLoad': 10000});
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            });
        it('Access to the cart page to check its performance', () => {
            LoginPage.performanceUser();
            Inventory.cartButton.click();
            browser.setTimeout({'pageLoad': 10000});
            expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');  
        });
        
    });
    describe('Test for problem user',()=>{
        it('Wrong password for problem user',()=>{
            LoginPage.login("problem_user");
            LoginPage.password("vicenzo");
            LoginPage.loginButton();
            expect(LoginPage.textErrorMessage).toHaveText(
            "Epic sadface: Username and password do not match any user in this service");
        });
        it('Change of inventory page when problem user login',()=>{
            LoginPage.problemUser();
            expect(Inventory.dogImg).toEqual("https://www.saucedemo.com/static/media/sl-404.168b1cce.jpg");
            Inventory.logout();
        })
    })
    describe('Standard username, a valid account',()=>{
        it('Set the correct user',()=>{
            LoginPage.standarUser();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            browser.pause(2000);
        });
        it('Logout of inventory for another test',()=>{
            LoginPage.standarUser();
            Inventory.menuButton.click();
            Inventory.logoutLink.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/');
            browser.pause(3000);
        })
    });
});
