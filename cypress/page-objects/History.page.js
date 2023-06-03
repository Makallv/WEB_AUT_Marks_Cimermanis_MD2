import BasePage from "./Base.page";

class HistoryPage extends BasePage{

    static get panel(){
        return cy.get(".panel-body")
    }
}

export default HistoryPage;