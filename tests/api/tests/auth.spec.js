const { test, expect } = require('@playwright/test');
const APIClient = require('../clients/apiClient');
const AuthService = require('../services/auth.service');

test('Generate API Token - Simple Books', async () => {
    const apiClient = new APIClient();
    await apiClient.init();

    const auth = new AuthService(apiClient);

    const token = await auth.generateToken();

    console.log('TOKEN:', token);

    expect(token).toBeDefined();
    expect(typeof token).toBe('string');

    apiClient.setToken(token);
});