import FormLocators from "../../locators/form-locators";

class Form {
    constructor(iframe) {
        this.locators = new FormLocators()
        this.iframe = iframe
    }

    fillName(name) {
        this.iframe.xpath(this.locators.firstName).type(name)
    }

    fillEmail(email) {
        this.iframe.xpath(this.locators.email).type(email)
    }

    chooseGender(gender) {
        this.iframe.xpath(this.locators.gender).select(gender)
    }

    chooseLocation(location) {
        this.iframe.xpath(this.locators.location).select(location)
    }

    choosePassions(passions) {
        passions.forEach(passion => {
            this.iframe.xpath(this.locators.passions[passion]).click()
        })
    }

    acceptTerms() {
        this.iframe.xpath(this.locators.terms).click()
    }

    subscribe() {
        this.iframe.xpath(this.locators.subscribe).click()
    }


}
export default Form;