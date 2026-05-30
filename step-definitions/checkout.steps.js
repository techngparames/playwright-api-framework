const { When } = require('@cucumber/cucumber');
const { CheckoutPage } = require('../pages/CheckoutPage');

let checkoutPage;

When('User enters checkout details {string} {string} {string}', async function (first, last, zip) {
    checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.enterUserDetails(first, last, zip);
});

When('User continues checkout', async function () {
    await checkoutPage.continueCheckout();
});

When('User finishes order', async function () {
    await checkoutPage.finishOrder();
});

When('User goes back to home', async function () {
    await checkoutPage.backToHome();
});

When('User logs out', async function () {
    await checkoutPage.logout();
});