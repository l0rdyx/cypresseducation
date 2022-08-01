
import BaseLocators from '../locators/base-locators';
class BasePage {

    constructor() {
        this.locators = new BaseLocators()
    }
    
    clickWithRetry(locator, timeout=2000, retries=3) {
        for (let i = 0; i < retries; i++) {
            try {
                cy.xpath(locator).click()
            } catch (err) {

            }
            cy.wait(timeout)
        }
    }

    getElement(locator, visible=true, TO=15000) {
        if (visible) {
            return cy.xpath(locator, {timeout: TO}).should('be.visible')
        } else {
            return cy.xpath(locator, {timeout: TO}).should('not.be.visible')
        }
    }

    getIframe(locator) {
        return cy.xpath(locator).its('0.contentDocument.body', { log: false }).should('not.be.empty').then((body) => cy.wrap(body, { log: false }))
    }

    findItem(quere) {
        cy.xpath(this.locators.searchBarButton).click()
        cy.xpath(this.locators.searchBar).type(quere + '{enter}')   
    }
}
export default BasePage;