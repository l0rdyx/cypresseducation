class BasePage {

    getElement(locator, visible=true, TO=15000) {
        if (visible) {
            return cy.xpath(locator, {timeout: TO}).should('be.visible')
        } else {
            return cy.xpath(locator, {timeout: TO}).should('not.be.visible')
        }
    }
}
export default BasePage;