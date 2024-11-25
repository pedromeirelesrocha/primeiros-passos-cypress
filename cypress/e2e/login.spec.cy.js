import userData from '../fixtures/userData.json'

describe('orange hrm test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton : "[type='submit']",
    sectionTittleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }


  it('Login Succes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField) .type (userData.userSuccess.username)
    cy.get(selectorsList.passwordField) .type (userData.userSuccess.password)
    cy.get(selectorsList.loginButton) .click ()
    cy.location ('pathname')  .should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
   })


it('Login Fail', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(selectorsList.usernameField) .type (userData.userFail.username)
  cy.get(selectorsList.passwordField) .type (userData.userFail.password)
  cy.get(selectorsList.loginButton) .click ()
  cy.get(selectorsList.wrongCredentialAlert)

 })
})