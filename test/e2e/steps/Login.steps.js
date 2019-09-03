import { assert } from 'chai';
import { Given, When, Then } from 'cucumber';
import { loginPage } from '../pages/Login.page';
import { context } from '../../data/Context';

Given(/^I navigate to Tottus Website$/, () => {
    loginPage.open();
});

When(/^I log in with a valide user$/, () => {
    loginPage.login(context.logins.user);
});

Then(/^show the user name '(.+)' on the site$/, (userName) => {  
   assert.equal(loginPage.welcomeMessage.getText(),userName);
});

When(/^I log in with a invalide user$/, () => {
    loginPage.login(context.logins.invalidUser);
});

Then(/^show an error message saying '(.+)'$/, (message) => {  
   assert.equal(loginPage.messageErrorUserOrPassword.getText(),message);
});

When(/^I want to recovery my password$/,() => {
    loginPage.recoveryMyPass(context.logins.user);
});

Then(/^show a message saying '(.+)'$/, (message) => {  
    assert.equal(loginPage.messageSuccesfulRecoveryPass.getText(),message);
 });
 