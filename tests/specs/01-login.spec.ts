import { test, expect } from '../fixtures/login-fixture'

test.describe('Login scenarios', () => {
    test('should login successfully with standard user', async ({loginPage}) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(loginPage.page).toHaveURL('/inventory.html');
    });

    test('should show error with invalid password', async ({loginPage}) => {
        await loginPage.login('standard_user','12345');
        await loginPage.expectErrorVisible('Epic sadface: Username and password do not match any user in this service');
    })

    test('should show error for locked out user', async ({loginPage}) => {
        await loginPage.login('locked_out_user', 'secret_sauce');
        await loginPage.expectErrorVisible('Epic sadface: Sorry, this user has been locked out.');
    })

    test('should show error when fields are empty', async ({loginPage}) => {
        await loginPage.login('','');
        await loginPage.expectErrorVisible('Epic sadface: Username is required');
    })

    test('should show error when password is missing', async ({loginPage}) => {
        await loginPage.login('standard_user', '');
        await loginPage.expectErrorVisible('Epic sadface: Password is required');
    })
})