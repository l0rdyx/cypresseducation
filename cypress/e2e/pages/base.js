class BasePage {

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
}
export default BasePage;