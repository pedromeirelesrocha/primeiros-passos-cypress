import userData from '../fixtures/userData.json'

describe('orange hrm test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton : "[type='submit']",
    sectionTittleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField:".oxd-input--active",
    dateCloseButton:".--close",
    submmitButton: "[type='submit']"
  }


  it.only('User Info Update', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField) .type (userData.userSuccess.username)
    cy.get(selectorsList.passwordField) .type (userData.userSuccess.password)
    cy.get(selectorsList.loginButton) .click ()
    cy.location ('pathname')  .should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton) .click()
    cy.get(selectorsList.firstNameField).clear().type ("Teste")
    cy.get(selectorsList.lastNameField).clear().type ("DaSilva")
    cy.get(selectorsList.genericField).eq(3).clear().type ("Employed12")
    cy.get(selectorsList.genericField).eq(4).clear().type ("OtherIdTeste")
    cy.get(selectorsList.genericField).eq(5).clear().type ("DriversLicenseTest")
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
    .clear().type ("2025-03-10")
    cy.get(selectorsList.dateCloseButton) .click()
    cy.get (selectorsList.submmitButton).eq(0) .click()
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