describe('orange hrm test', () => {
  it('Login Succes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']") .type ('Admin')
    cy.get("[name='password']") .type ('admin123')
    cy.get("[type='submit']") .click ()
    cy.location ('pathname')  .should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-topbar-header-breadcrumb-module') .contains ('Dashboard')
   })
})

describe('orange hrm test', () => {
it('Login Fail', () => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get("[name='username']") .type ('Test')
  cy.get("[name='password']") .type ('Test')
  cy.get("[type='submit']") .click ()
  cy.get ("[role='alert']")

 })
})