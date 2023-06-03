import BasePage from "./Base.page";

class LoginPage extends  BasePage{

    static get url(){
        return "/profile.php#login"
    }

    static get usernameInputField(){
        return cy.get("#txt-username")
    }

    static get passwordInputField(){
        return cy.get("#txt-password")
    }

    static get loginBtn() {
        return cy.get("#btn-login")
    }
}


export default LoginPage;