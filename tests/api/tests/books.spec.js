const { test, expect } = require('@playwright/test');

let token;
let orderId;

test.describe('Simple Books API Flow', () => {

    test.beforeAll(async ({ request }) => {

        const res = await request.post('https://simple-books-api.click/api-clients/', {
            data: {
                clientName: 'playwright-user',
                clientEmail: `test${Date.now()}@example.com`
            }
        });

        const body = await res.json();
        token = body.accessToken;

        console.log('TOKEN:', token);
    });

    test('GET books', async ({ request }) => {

        const res = await request.get('https://simple-books-api.click/books');

        expect(res.ok()).toBeTruthy();
    });

    test('POST order', async ({ request }) => {

        const res = await request.post('https://simple-books-api.click/orders', {
            data: {
                bookId: 1,
                customerName: 'John Doe'
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const body = await res.json();

        console.log('ORDER:', body);

        expect(res.status()).toBe(201);

        orderId = body.orderId;
    });

    test('PATCH order', async ({ request }) => {

        const res = await request.patch(`https://simple-books-api.click/orders/${orderId}`, {
            data: {
                customerName: 'Updated Name'
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        expect(res.ok()).toBeTruthy();
    });

    test('DELETE order', async ({ request }) => {

        const res = await request.delete(`https://simple-books-api.click/orders/${orderId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        expect([200, 204]).toContain(res.status());
    });

});