import { test, expect } from '../fixtures/login-fixture';
import { STANDARD_USER, LOCKED_OUT_USER, PASSWORD} from '../utils/env';

test.describe('Login scenarios', () => {
    test('should login successfully with standard user', async ({loginPage}) => {
        await loginPage.login(STANDARD_USER, PASSWORD);
        await expect(loginPage.page).toHaveURL('/inventory.html');
    });

    test('should show error with invalid password', async ({loginPage}) => {
        await loginPage.login(STANDARD_USER,'12345');
        await loginPage.expectErrorVisible('Epic sadface: Username and password do not match any user in this service');
    })

    test('should show error for locked out user', async ({loginPage}) => {
        await loginPage.login(LOCKED_OUT_USER, PASSWORD);
        await loginPage.expectErrorVisible('Epic sadface: Sorry, this user has been locked out.');
    })

    test('should show error when fields are empty', async ({loginPage}) => {
        await loginPage.login('','');
        await loginPage.expectErrorVisible('Epic sadface: Username is required');
    })

    test('should show error when password is missing', async ({loginPage}) => {
        await loginPage.login(STANDARD_USER, '');
        await loginPage.expectErrorVisible('Epic sadface: Password is required');
    })
})