class BaseLocators {
    constructor() {
        this.searchBarButton = "//button[contains(@class, 'btn--link site-header__search-toggle js-drawer-open-top')]"
        this.searchBar = "//input[contains(@class,'search__input search-bar__input')]"
        this.cartIcon = ""
        this.showAllItems = "//div[@class='see-more-results']/a"
    }
}
export default BaseLocators;