const { When, Then } = require('@cucumber/cucumber');
const { CartPage } = require('../pages/CartPage');

let cartPage;

When('User opens cart', async function () {
    cartPage = new CartPage(this.page);
    await cartPage.openCart();
});

Then('Cart should have {int} products', async function (count) {
    await cartPage.validateCartItems(count);
});

Then('User clicks checkout', async function () {
    await cartPage.checkout();
});