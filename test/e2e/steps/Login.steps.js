import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { loginPage } from '../pages/Login.page';
import { context } from '../../data/Context';

Given(/^The user navigates to Tottus Website$/, () => {
    loginPage.open();
});

When(/^The user logs in with a valide user$/, () => {
    loginPage.login(context.logins.user);
});

Then(/^show the users name '(.+)' on the site$/, (userName) => {  
   assert.equal(loginPage.welcomeMessage.getText(),userName);
});

When(/^The user logs in with an invalide user$/, () => {
    loginPage.login(context.userdata.invalidUser);
});

Then(/^show an error message saying '(.+)'$/, (message) => {  
   assert.equal(loginPage.messageErrorUserOrPassword.getText(),message);
});

When(/^The user wants to recovery his password$/,() => {
    loginPage.recoveryMyPass(context.userdata.user);
});

Then(/^show a message saying '(.+)'$/, (message) => {  
    assert.equal(loginPage.messageSuccesfulRecoveryPass.getText(),message);
 });
 