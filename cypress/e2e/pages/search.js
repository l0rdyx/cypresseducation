import BasePage from "./base"

class SearchPage extends BasePage {
    constructor(quere) {
        super()
        this.quere = quere
        this.findItem(quere)
        
    }
}
export default SearchPage;