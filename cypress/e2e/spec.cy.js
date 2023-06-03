import LoginPage from "../page-objects/Login.page";
import ConformationPage from "../page-objects/Conformation.page";
import HomePage from "../page-objects/Home.page";
import AppointmentPage from "../page-objects/Appointment.page";
import HistoryPage from "../page-objects/History.page";
import homePage from "../page-objects/Home.page";

describe('Appointment scenarios', () => {
  beforeEach(() =>{
    HomePage.visit()
  })
  it("Make an appointment", () => {
    HomePage.appointmentButton
    LoginPage.usernameInputField.type("John Doe")
    LoginPage.passwordInputField.type("ThisIsNotAPassword")
    LoginPage.loginBtn.click()
    AppointmentPage.facility.select("Seoul CURA Healthcare Center")
    AppointmentPage.checkboxInput.click()
    AppointmentPage.radioButtonMedicare.click()
    AppointmentPage.commentField.type("CURA Healthcare Service")
    AppointmentPage.datePicker.should('be.visible').click().type("30/06/2023")
    AppointmentPage.bookAppointmentBtn.click()
    ConformationPage.headingText.should("have.text", "Appointment Confirmation")
    ConformationPage.facility.should("have.text", "Seoul CURA Healthcare Center")
    ConformationPage.applyForReadmission.should("have.text", "Yes")
    ConformationPage.visitDay.should("have.text", "30/06/2023")
    ConformationPage.healthcareProgram.should("have.text", "Medicare")
    ConformationPage.comment.should("have.text", "CURA Healthcare Service")
  })

  it('Appointment history is empty', function () {
    HomePage.appointmentButton
    LoginPage.usernameInputField.type("John Doe")
    LoginPage.passwordInputField.type("ThisIsNotAPassword")
    LoginPage.loginBtn.click()
    HomePage.burger.click()
    HomePage.sideBar.should("have.class", "active")
    HomePage.history.contains("History").click()
    HistoryPage.panel.should("not.exist")
  });
})