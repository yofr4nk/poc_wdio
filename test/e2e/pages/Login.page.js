class LoginPage {
    open() {
        browser.url('/');
    }

    get buttonLogin() {
        return $('div .auth-container .sign-in');
    }

    get buttonRegister() {
        return $('div .auth-container .sign-up');
    }

    get checkScreenModal(){
        return $('.signin .image');
    }
  
    get inputEmail() {
        return $('#email');
    }

    get inputPassword() {
        return $('#password');
    }

    get buttonSignIn() {
        return $('#login-button');
    }

    get welcomeMessage() {
        return $('span=Gabriel');
    }

    get messageErrorUserOrPassword(){
        return $('span=Usuario y/o Contraseña incorrecta');
    }

    get buttonConfirmEmail(){
        return $('button=Confirmar email');
    }

    get messageSuccesfulRecoveryPass(){
        return $('.title-message')
    }

    login(user) {
        if (this.buttonLogin.isExisting()) {
            this.buttonLogin.click();
            this.inputEmail.waitForEnabled();
            this.inputEmail.setValue(user.login);
            this.inputPassword.setValue(user.password);
            this.buttonSignIn.click();
        }
    }

    recoveryMyPass(user){
            browser.url('/mi-cuenta/recuperar');
            this.inputEmail.waitForEnabled();
            this.inputEmail.setValue(user.login);
            this.buttonConfirmEmail.click();
        
        }
    }

export const loginPage = new LoginPage();
