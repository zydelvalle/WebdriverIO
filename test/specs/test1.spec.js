
describe('Demo Tests', function(){

    it('My First Test', async() => {

        browser.url('https://google.com')

        await $('[name="q"]').setValue('WebDriverIO')

        browser.keys('Enter')
        browser.pause(10000)

    

    })


})