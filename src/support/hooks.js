
const webdriver = require('selenium-webdriver');;
const reporter = require('cucumber-html-reporter');
const env = require('./environment');
const TodoPage = require('../pages/todo');
const path = require('path');
const fs = require('fs');

function configureDriver() {
    // Initialize WebDriver Object
    this.driver = new webdriver.Builder()
        .forBrowser(this.env.driver.browser)
        .build();
    this.driver.manage().window().setSize(1920, 1080);
    if (this.driver) {
        this.driver.manage().timeouts().pageLoadTimeout(this.env.cucumber.getPageTimeout);
    }
}

function createPageObjects() {
    if (this.driver) {
        this.todo = new TodoPage(this.driver);
    }
}

async function stopDriver() {
    if (!this.driver) {
        return;
    }
    await this.driver.quit();
    delete this.driver;
}

function writeReport() {
    try {
        const jsonFile = path.join(env.tests.reportDirectory, 'cucumber_report.json');
        const output = path.join(env.tests.reportDirectory, 'cucumber_report.html');
        const stat = fs.statSync(jsonFile);
        if (stat.isFile()) {
            const options = {
                theme: 'bootstrap',
                jsonFile,
                output,
                reportSuiteAsScenarios: true
            };
            reporter.generate(options);
        }
    } catch (e) {
        console.log(e);
        console.log('Not writing report file. Cannot read cucumber_report.json');
    }
}

function saveScreenshot(scenario) {
    if (!this.driver) {
        return Promise.resolve();
    }
    if (!scenario.isFailed()) {
        return Promise.resolve();
    }
    // On a failed scenario, take a screenshot
    return this.driver.takeScreenshot()
        .then(data => scenario.attach(new Buffer(data, 'base64'), 'image/png'))
        .catch(() => { }); 
}

module.exports = function () {
    this.setDefaultTimeout(env.cucumber.stepTimeout);
    this.registerHandler('BeforeScenario', function (scenario) {
        env.driver.testrunname = scenario.getName();
    });
    this.Before(configureDriver);
    this.Before(createPageObjects);
    this.After(stopDriver);
    this.After(saveScreenshot);
    this.registerHandler('AfterFeatures', writeReport);
};