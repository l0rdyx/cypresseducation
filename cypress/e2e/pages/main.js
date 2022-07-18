import BasePage from './base.js'
import MainPageLocators from '../locators.js';

class MainPage extends BasePage {
    constructor(acceptCookies=true, closeForm=true) {
        super();
        this.locators = new MainPageLocators();
        if (acceptCookies) {
            this.acceptCookies();
        }
    }

    acceptCookies() {
        return cy.get(this.locators.acceptCookiesButton).click()
    }

    checkCookiesAccepted() {
        return cy
        .get(this.locators.CookiesBlock)
        .should('have.css', 'visibility', 'hidden') == true
    }
}
export default MainPage;