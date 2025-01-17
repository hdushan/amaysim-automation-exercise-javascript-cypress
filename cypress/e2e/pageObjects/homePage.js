import BasePage from './basePage'
import loginPage from './loginPage'

class HomePage extends BasePage {
  constructor() {
    super()
    this.url = '/'
    this.mainElement = '#main'
    this.accountLink = 'a[href="/my-account/login"]'
  }

  goToLoginPage() {
    cy.get(this.mainElement).should('be.visible')
    cy.get(this.accountLink).filter(':visible')
      .click()
    loginPage.isDisplayed()
    return loginPage
  }
}

export default new HomePage()
