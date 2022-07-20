import BasePage from './base.js'
import MainPageLocators from '../locators/mp-locators.js';
import Form from './elements/form.js';

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
    


    waitPageToBeUnscrollable() {
        cy.get('body', { timeout: 15000 }).should('have.class', 'box_active_disable_scrolling')
    }

    getPopUpIframe() {
        return this.getIframe(this.locators.iframeBlock)
    }
    acceptCookies() {
        return this.getElement(this.locators.acceptCookiesButton).click()
    }

    checkCookiesAccepted() {
        return this.getElement(this.locators.cookiesBlock, false) == true
    }

    fillForm() {
        this.waitPageToBeUnscrollable()
        var iframe = this.getPopUpIframe()
        var form = new Form(iframe)
        form.fillName('Ivan')
    }

    closeForm() {
        this.waitPageToBeUnscrollable()
        return this.getPopUpIframe().xpath(this.locators.closeFormButton).click()
    }
}
export default MainPage;