import Form from './pages/elements/form.js'
import MainPage from './pages/main.js'
import SearchPage from './pages/search.js'

// const locURLs = ['https://www.pocsports.com/', 'https://na.pocsports.com/', 'https://au.pocsports.com/'] 
const locURLs = ['https://www.pocsports.com/']

/*

Url sets have to be different for each test block, 
f.e. there is no need to test cookies button on NA loc

*/


locURLs.forEach(locURL => {
describe('Test main page', () => {

    beforeEach(() => {
      cy.log('open page')
      cy.visit(locURL)
      cy.viewport(2560, 1600)
    })
    
    /*
    it('init and accept cookies', () => {
      var page = new MainPage(true, true) 
      page.checkCookiesAccepted()
    })
    

    it('fills form', () => {
      var page = new MainPage(true, false)
      page.fillForm()
    })
    */

    it('find and add item', () => {
      var page = new MainPage(true, true)
      var searchResults = new SearchPage('Helmet')
      //var itemPage = searchResults.addFirst()
      // itemPage.addWithName()
      
    })


  })
})