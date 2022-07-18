import MainPage from './pages/main.js'

const locURLs = ['https://www.pocsports.com/', 'https://na.pocsports.com/', 'https://au.pocsports.com/']

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