import BasePage from './base.js'
import MainPageLocators from '../locators.js';

class MainPage extends BasePage {
    constructor(acceptCookies=true, closeForm=true) {
        super();
        this.locators = new MainPageLocators();
        if (acceptCookies) {
            this.acceptCookies();
        } 
        if (closeForm) {
            this.closeForm();
        }
    }

    acceptCookies() {
        return cy.get(this.locators.acceptCookiesButton).click()
    }

    checkCookiesAccepted() {
        return cy
        .get(this.locators.cookiesBlock)
        .should('have.css', 'visibility', 'hidden') == true
    }

    fillForm() {

    }

    closeForm() {
        //return cy.get(this.locators.closeFormButton).click()
    }
}
export default MainPage;