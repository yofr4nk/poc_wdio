import { assert, expect } from 'chai';
import { Given, When, Then } from 'cucumber';
import SearchPage from '../pages/Search.page';

const searchPage = new SearchPage();

Given(/^The user navigates to Home Page$/, () => {
    searchPage.open();
});

When(/^The user enter '(.+)' in search component$/, (product) => {
    searchPage.type(product);

    assert.equal(product, 'Doritos');
});

Then(/^show the search preview$/, () => {
    searchPage.selectItem();
});

Then(/^should be located into products page$/, () => {
    assert.isTrue(searchPage.validateProductSection());
});

Then(/^the user could see the product name '(.+)' before get it$/, (product) => {
    expect(searchPage.validateProductTitle(product)).to.be.an('string')
        .that.to.match(new RegExp(product, 'i'));
});