import BasePage from "./Base.page";


class HomePage extends BasePage{

    static get url(){
        return "/"
    }

    static get appointmentButton() {
        return cy.get("#btn-make-appointment").click()
    }

    static get burger(){
        return cy.get("#menu-toggle")
    }

    static get sideBar(){
        return cy.get("#sidebar-wrapper")
    }

    static get history(){
        return cy.get("a")
    }
}

export default HomePage;