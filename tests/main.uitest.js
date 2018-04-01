const path = require('path')

describe('main testsuite', () => {

  it('repro the bug', () => {
      const indexHtml = path.resolve(__dirname, '../index.html')
      browser.url('file://' + indexHtml)
      browser.pause(500)
      browser.keys("1")
      browser.pause(5000)
  })

})
