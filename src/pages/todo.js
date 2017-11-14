const Base = require('./selenium-base');

class todoPage extends Base {
    constructor(driver) {
        super(driver);

        this.locators = {
            heading: this.By.tagName('h1'),
            textBox: this.By.id('new-todo'),
            checkValueInPage: (value) =>
                this.By.xpath(`//label[text()='${value}']`),
            checkBox: (value) =>
                this.By.xpath(`//label[text()='${value}']/../input`),
            completedToDo: (value) =>
                this.By.xpath(`//label[text()='${value}']/ancestor::li[@class='completed ember-view']`),
            pending: (value) =>
                this.By.xpath(`//label[text()='${value}']/ancestor::li[@class='ember-view']`),
            toggle: this.By.id('toggle-all'),
            completed: this.By.linkText('Completed'),
            delete: (value) =>
                this.By.xpath(`//label[text()='${value}']/../button`),
            clearCompleted: this.By.id('clear-completed'),    
        };

        this.isDisplayedLocator = this.locators.heading;
        this.waitUntilDisplayedLocator = this.locators.heading;
    }

    async addTask(name){
        const task = await this.driver.findElement(this.locators.textBox);
        await task.clear();
        await task.sendKeys(name);
        await task.sendKeys(this.Key.RETURN);
    }

    async checkTask(name){
        return this.driver.isElementPresent(this.locators.checkValueInPage(name));
    }

    async editTask(taskOld, taskNew){
        const task = await this.driver.findElement(this.locators.checkValueInPage(taskOld));
        await this.driver.actions()
                .mouseMove(task)
                .doubleClick()
                .sendKeys(this.Key.chord(this.Key.CONTROL, "a"))
                .sendKeys(this.Key.BACK_SPACE)
                .sendKeys(taskNew)
                .sendKeys(this.Key.RETURN)
                .perform();
    }

    async deleteTask(taskName){
        const task = await this.driver.findElement(this.locators.checkValueInPage(taskName));
        const deleteButton = await this.driver.findElement(this.locators.delete(taskName));
        await this.driver.actions()
                .mouseMove(task)
                .mouseMove(deleteButton)
                .click()
                .perform();
    }

    async clickCheckbox(taskName){
        const task = await this.driver.findElement(this.locators.checkBox(taskName));
        await this.driver.actions()
                .mouseMove(task)
                .click()
                .perform();
    }

    async checkStatusCompleted(taskName){
        return this.driver.isElementPresent(this.locators.completedToDo(taskName));
    }

    async checkStatusPending(taskName){
        return this.driver.isElementPresent(this.locators.pending(taskName));
    }

    async clickToggle(){
        const toggle = await this.driver.findElement(this.locators.toggle);
        await this.driver.actions()
                .mouseMove(toggle)
                .click()
                .perform();
    }

    async clickCompleted(){
        await this.driver.findElement(this.locators.completed).click();
    }

    async clearCompleted(){
        await this.driver.findElement(this.locators.clearCompleted).click();
    }
}

module.exports = todoPage;