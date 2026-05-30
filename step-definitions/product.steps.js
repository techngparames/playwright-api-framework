const { When } = require('@cucumber/cucumber');
const { ProductPage } = require('../pages/ProductPage');

let productPage;

When('User applies filter high to low', async function () {
    productPage = new ProductPage(this.page);
    await productPage.applyHighToLowFilter();
});

When('User adds two products to cart', async function () {
    await productPage.addProductsToCart(2);
});