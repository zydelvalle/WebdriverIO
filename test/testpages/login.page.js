class LoginPage{
    
    get usernameTextbox(){
        return $('[name="username"]')
    }

    get passwordTextbox(){
        return $('[name="password"]')
    }

    get loginButton(){
        return $('button[type="submit"]')
    }

    get loginMessage(){
        return $('#flash')
    }

    async enterUsername(username){
        await this.usernameTextbox.setValue(username)
    }

    async enterPassword(password){
        await this.passwordTextbox.setValue(password)
    }

    async enterLogin(){
        await this.loginButton.click()
    }

    async verifyLoginMessage(actualMessage){
        const message = await this.loginMessage.getText()
        await expect(message).toContain(actualMessage)
    }

}
module.exports = new LoginPage()