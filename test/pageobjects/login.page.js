

class LoginPage {
   
    get inputUsername () { return $('div[class="form_group"]>input[id="user-name"]') };
    get inputPassword () { return $('div[class="form_group"]>input[id="password"]') };
    get buttonLogin () { return $('form>input[id="login-button"]')}
    get textErrorMessage () { return $('h3[data-test="error"]')}
    get errorButton () { return $('button[class="error-button"]') };

    login (username) {
        this.inputUsername.click();
        this.inputUsername.setValue(username);
        this.inputUsername.keys("Tab");
    }
    password(password){
        this.inputPassword.click();
        this.inputPassword.setValue(password);
        this.inputPassword.keys("Tab");
    }
    loginButton(){
        this.buttonLogin.click();
    }
    btnError(){
        this.errorButton.click();
    }
    open () {
        return browser.url('https://www.saucedemo.com/');
    }
}

module.exports = new LoginPage();
