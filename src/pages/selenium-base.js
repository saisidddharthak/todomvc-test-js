
const webdriver = require('selenium-webdriver');

class SeleniumBase {
    constructor(driver) {
        this.By = webdriver.By;
        this.until = webdriver.until;
        this.Key = webdriver.Key;
        this.driver = driver;
        this.locators = {};
        this.defaultTimeout = 5000;
        this.isDisplayedLocator = null;
        this.waitUntilDisplayedLocator = null;
    }

    isDisplayed() {
        if (this.isDisplayedLocator === undefined) {
            throw new Error('Sub class must define a locator to use.');
        }
        return this.driver.isElementPresent(this.isDisplayedLocator);
    }

    waitUntilDisplayed(timeout = this.defaultTimeout) {
        if (this.waitUntilDisplayedLocator === undefined) {
            throw new Error('Sub class must define a locator to use.');
        }
        return this.driver.wait(this.until.elementLocated(this.waitUntilDisplayedLocator), timeout);
    }
}

module.exports = SeleniumBase;