class RegisterPage {

    get buttonRegister() {
        return $('div .auth-container .sign-up');
    }

    get inputName(){
        return $('#name');
    }

    get checkboxPrivacyPolicies(){
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
        return $('div .title > div');
    }

    get buttonStartToBuy(){
        return $('button=Empezar a comprar');
    }

    
    
    goToregister() {
        if (this.buttonRegister.waitForEnabled()) {
            this.buttonRegister.click();
        }
    }

    enterName(register){
        if ( this.inputName.isExisting()){
            this.inputName.setValue(register.name);
            this.checkboxPrivacyPolicies.click();
            this.buttonConfirmName.waitForEnabled();
            this.buttonConfirmName.click();
        }
        
    }

    enterEmail(register){
        if ( this.inputEmail.isExisting()){
            this.inputEmail.setValue(register.email);
            this.buttonConfirmEmail.click();
        }        
    }

    setPassword(register){
        if ( this.inputPassword.isExisting()){
            this.inputPassword.setValue(register.password);
            this.inputPasswordVerification.setValue(register.password);
            this.checkboxPrivacyPolicies.click();
            this.buttonConfirmPassword.click();
        }
    }

    completeRegistration(){
        this.textThankYouMessage.waitForDisplayed();
    }
}

export const registerPage = new RegisterPage();
