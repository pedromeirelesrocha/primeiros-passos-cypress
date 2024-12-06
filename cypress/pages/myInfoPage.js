class MyInfoPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            genericComboBox: ".oxd-select-text--arrow",
            secondItemComboBox: ":nth-child(6) > spana",
            thirdItemComboBox: ":nth-child(3) > span",
            dateCloseButton: ".--close",
            submmitButton: ".orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button",
            popUpSucess: ".oxd-toast-icon-wrap > .oxd-icon"
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(2).clear().type(nickName)
    }

    fillEmployeeDetails(employeeId, otherId, DriversLicenseNumber, DriversLicenseDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(DriversLicenseNumber)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
            .clear().type(DriversLicenseDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm() {
        cy.get(this.selectorsList().submmitButton).eq(0).click({ force: true })
        cy.get(this.selectorsList().popUpSucess).should('be.visible')
    }


    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click({ force: true })
        cy.get(':nth-child(6) > span').click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click({ force: true })
        cy.get(':nth-child(3) > span').click()

    }
}


export default MyInfoPage
