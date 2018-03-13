module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },

    '3+3=6': browser => {
        browser.waitForElementVisible('button[name="3Button"]', 3000)
        browser.expect.element('span[name="result"]').text.to.equal('0')
        browser.click('button[name="3Button"]')
        browser.expect.element('span[name="result"]').text.to.equal('3')
        browser.click('button[name="addButton"]')
        browser.expect.element('span[name="result"]').text.to.equal('0')
        browser.click('button[name="3Button"]')
        browser.expect.element('span[name="result"]').text.to.equal('3')
        browser.click('button[name="equalsButton"]')
        browser.expect.element('span[name="result"]').text.to.equal('6')
    }
}