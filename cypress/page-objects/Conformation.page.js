import BasePage from "./Base.page";

class ConformationPage extends BasePage{

    static get url(){
        return "/appointment.php#summary"
    }

    static get facility(){
        return cy.get("#facility")
    }

    static get applyForReadmission(){
        return cy.get("#hospital_readmission")
    }

    static get healthcareProgram(){
        return cy.get("#program")
    }

    static get visitDay(){
        return cy.get("#visit_date")
    }

    static get comment(){
        return cy.get("#comment")
    }

    static get headingText(){
        return cy.get("h2")
    }
}

export default ConformationPage;