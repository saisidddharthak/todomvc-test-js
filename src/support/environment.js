module.exports = {
    todo: {
        url: 'http://todomvc.com/examples/emberjs/'
    },
    cucumber: {
        stepTimeout: process.env.CUCUMBER_BASE_TIMEOUT || 30000,
        slowStepsTimeOut: process.env.CUCUMBER_SLOW_STEP_TIMEOUT || 50000,
        getPageTimeout: process.env.PAGE_TIMEOUT || 40000,
        webdriverWaitTimeout: process.env.WEBDRIVER_WAIT_TIMEOUT || 10000,
    },
    driver: {
        browser: process.env.SELENIUM_BROWSER || 'chrome',
    },
    tests: {
        reportDirectory: './report/',
    },
};