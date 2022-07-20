import MainPage from './pages/main.js'

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
    })
    
    it('init and accept cookies', () => {
      var page = new MainPage(true, true)
      page.checkCookiesAccepted()
    })
  })
})