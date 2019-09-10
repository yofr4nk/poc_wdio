class RegisterPage {

    get buttonRegister() {
        return $('div .auth-container .sign-up');
    }

    get inputName(){
        return $('#name');
    }

    get checkboxPrivacyPolicy(){
        return $('div .checkbox');
    }
 
    get buttonConfirmName(){
        return $('button=Confirmar nombre');
    }

    get inputEmail(){
        return $('#email');
    }

    get buttonConfirmEmail(){
        return $('button=Confirmar email');
    }

    get inputPassword() {
        return $('#password');
    }

    get inputPasswordVerification() {
        return $('#password-verification');
    }

    get buttonConfirmPassword(){
        return $('button=Confirmar contraseña');
    }

    get textThankYouMessage(){
        return $('div .title');
    }

    get buttonStartToBuy(){
        return $('button=Empezar a comprar');
    }

    register(user) {
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

export const registerPage = new RegisterPage();
