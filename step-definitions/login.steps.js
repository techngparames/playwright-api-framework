const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/LoginPage');

let loginPage;

Given('User is on login page', async function () {
    loginPage = new LoginPage(this.page);
    await loginPage.goto();
});

When('User logs in with valid credentials', async function () {
    await loginPage.login('standard_user', 'secret_sauce');
});

Then('User should be navigated to products page', async function () {
    await this.page.waitForURL('**/inventory.html', { timeout: 30000 });
});