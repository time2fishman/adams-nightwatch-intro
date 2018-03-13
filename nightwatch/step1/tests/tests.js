module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },
    after: browser => {
        browser.end()
    },

    '3+3=6': browser => {
        browser.useXpath()
        browser.waitForElementVisible('//*[@id="root"]/main/div[2]/section[1]/button[12]', 3000)
        browser.expect.element('//*[@id="root"]/main/div[1]/span').text.to.equal('0')
        browser.click('//*[@id="root"]/main/div[2]/section[1]/button[12]')
        browser.expect.element('//*[@id="root"]/main/div[1]/span').text.to.equal('3')
        browser.click('//*[@id="root"]/main/div[2]/section[2]/button[4]')
        browser.expect.element('//*[@id="root"]/main/div[1]/span').text.to.equal('0')
        browser.click('//*[@id="root"]/main/div[2]/section[1]/button[12]')
        browser.expect.element('//*[@id="root"]/main/div[1]/span').text.to.equal('3')
        browser.pause(4000)
        browser.click('//*[@id="root"]/main/div[2]/section[2]/button[5]')
        browser.pause(1000)
        browser.expect.element('//*[@id="root"]/main/div[1]/span').text.to.equal('6')
    }
}