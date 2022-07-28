class FormLocators {

    constructor() {
        this.firstName = "//input[@id='form_input_first_name']"
        this.email = "//input[@id='form_input_email']"
        this.gender = "//select[@id = 'form_input_custom1']"
        this.location = "//select[@id = 'form_input_custom2']"
        this.passions = {
            'snow': "//p[text() = 'SNOW']/preceding-sibling::input",
            'cycling': "//p[text() = 'CYCLING']/preceding-sibling::input",
            'biking': "//p[text() = 'MOUNTAIN BIKING']/preceding-sibling::input",
            'sunglasses': "//p[text() = 'SUNGLASSES']/preceding-sibling::input"
        }
        this.terms = "//input[@id = 'form_input_custom7']"
        this.subscribe = "//button[text() = 'Subscribe']"
    }
}

export default FormLocators;