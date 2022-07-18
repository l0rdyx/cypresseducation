import MainPage from './pages/main.js'

describe('Test main page', () => {
  it('init and accept cookies', () => {
    var page = new MainPage(true, true)
    page.checkCookiesAccepted()
  })
})