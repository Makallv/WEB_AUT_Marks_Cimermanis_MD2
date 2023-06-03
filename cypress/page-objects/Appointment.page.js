import BasePage from "./Base.page";

class AppointmentPage extends BasePage{

    static get url(){
        return "/#appointment"
    }

    static get facility(){
        return cy.get("#combo_facility")
    }

    static get checkboxInput(){
        return cy.get("#chk_hospotal_readmission")
    }

    static get commentField(){
        return cy.get("#txt_comment")
    }

    static get radioButtonMedicare(){
        return cy.get("#radio_program_medicare")
    }

    static get bookAppointmentBtn(){
        return cy.get("#btn-book-appointment")
    }

    static get datePicker(){
        return cy.get("#txt_visit_date")
    }

    static get day(){
        return cy.get(".day")
    }
}

export default AppointmentPage