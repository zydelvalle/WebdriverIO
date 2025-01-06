const LoginPage = require('../testpages/login.page')

describe('Demo Tests', () => {

    it('Login Test', async() => {
        browser.url('https://the-internet.herokuapp.com/login')

        await LoginPage.enterUsername('tomsmith')
        await LoginPage.enterPassword('SuperSecretPassword!')
        await LoginPage.enterLogin()
        await LoginPage.verifyLoginMessage('You logged into a secure area!')

        // await $('[name="username"]').setValue('tomsmith')
        // await $('[name="password"]').setValue('SuperSecretPassword!')
        // await $('button[type="submit"]').click()
        // const message = await $('#flash').getText()
        // await expect(message).toContain('You logged into a secure area!')
        browser.pause(10000) 




    })



})