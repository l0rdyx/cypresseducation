import FormLocators from "../../locators/form-locators";

class Form {
    constructor(iframe) {
        this.locators = new FormLocators()
        this.iframe = iframe
    }

    fillName(name) {
        this.iframe.xpath(this.locators.firstName).type(name)
    }
}
export default Form;