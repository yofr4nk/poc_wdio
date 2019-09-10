import { assert } from 'chai';
import { When, Then, And } from 'cucumber';
import { registerPage } from '../pages/Register.page';
import { context } from '../../data/Context';


When(/^The user clicks on to registers button$/, () => {
   registerPage.goToregister();
});

Then(/^shows a modal to enter and confirm the name and accepts the privacy policies$/, () => {  
    registerPage.enterName(context.userdata.register);
});

And(/^the user enters the email and confirm it$/,() => {
    registerPage.enterEmail(context.userdata.register);
});

Then(/^set a password for the account and accepts the terms and conditions$/,() => {
    registerPage.setPassword(context.userdata.register);
}); 

And(/^show the successfull registration message '(.+)'$/,(message) => {
    assert.equal(registerPage.textThankYouMessage.getText(),message);
    registerPage.buttonStartToBuy.click();
});