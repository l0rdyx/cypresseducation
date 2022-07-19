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
        return this.getElement(this.locators.acceptCookiesButton).click()
    }

    checkCookiesAccepted() {
        return this.getElement(this.locators.cookiesBlock, false) == true
    }

    fillForm() {

    }

    closeForm() {
        cy.get('body', { timeout: 15000 }).should('have.class', 'box_active_disable_scrolling')
        return cy.get(this.locators.closeFormButton).click()
    }
}
export default MainPage;