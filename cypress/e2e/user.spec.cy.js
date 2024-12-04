import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js';
import DashBoardPage from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';

const loginPage = new LoginPage()
const dashboardPage = new DashBoardPage()
const menuPage = new MenuPage()

describe('orange hrm test', () => {

  const selectorsList = {
    
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField:".oxd-input--active",
    genericComboBox: ".oxd-select-text--arrow",
    secondItemComboBox: ":nth-child(6) > spana",
    thirdItemComboBox: ":nth-child(3) > span",
    dateCloseButton:".--close",
    submmitButton: "[type='submit']"
  }


  it.only('User Info Update', () => { 
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage .checkDashboardPage()
    menuPage .accessMyInfo()

    cy.get(selectorsList.firstNameField).clear().type ("Teste")
    cy.get(selectorsList.lastNameField).clear().type ("DaSilva")
    cy.get(selectorsList.genericField).eq(3).clear().type ("Employed12")
    cy.get(selectorsList.genericField).eq(4).clear().type ("OtherIdTeste")
    cy.get(selectorsList.genericField).eq(5).clear().type ("DriversLicenseTest")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
    .clear().type ("2025-03-10")
    cy.get(selectorsList.dateCloseButton) .click()
    cy.get (selectorsList.submmitButton).eq(0) .click({force: true})
    cy.get(selectorsList.genericComboBox) .eq(0) .click({force: true})
    cy.get(':nth-child(6) > span') .click()
    cy.get(selectorsList.genericComboBox) .eq(1) .click({force: true})
    cy.get(':nth-child(3) > span').click()
    cy.get ('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast') 
   })


it('Login Fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorsList.usernameField) .type (userData.userFail.username)
  cy.get(selectorsList.passwordField) .type (userData.userFail.password)
  cy.get(selectorsList.loginButton) .click ()
  cy.get(selectorsList.wrongCredentialAlert)

 })
})