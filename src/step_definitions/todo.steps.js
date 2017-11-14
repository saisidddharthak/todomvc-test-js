const env = require('./../support/environment');
const assert = require('assert')

module.exports = function () {
    this.Given(/^I am on the ToDoMVC page$/, { timeout: env.cucumber.slowStepsTimeOut } , async function () {
        await this.navigateToApp();
        return this.todo.waitUntilDisplayed();
    });

    this.When(/^I add ([^"]*) onto todo list$/, async function (taskName) {
        await this.todo.addTask(taskName);
    });

    this.Then(/^([^"]*) should be displayed on the todo list$/, async function (taskName) {
        const actual = await this.todo.checkTask(taskName);
        assert(actual);
    });

    this.When(/^I edit ([^"]*) on todo list as ([^"]*)$/, async function (oldName, newName) {
        await this.todo.editTask(oldName,newName);
    });

    this.When(/^I complete ([^"]*) on todo list$/, async function (taskName) {
        await this.todo.clickCheckbox(taskName);
    });

    this.Then(/^the ([^"]*) should be completed$/, async function (taskName) {
         const actual = await this.todo.checkStatusCompleted(taskName);
         assert(actual);
    });

    this.When(/^I re\-activate ([^"]*) on todo list$/, async function (taskName) {
        await this.todo.clickCheckbox(taskName);
    });

    this.Then(/^the ([^"]*) should be re\-activated$/, async function (taskName) {
         const actual = await this.todo.checkStatusPending(taskName);
         assert(actual);
    });

    this.When(/^I complete\-all tasks on todo list$/, async function () {
        await this.todo.clickToggle();
    });

    this.When(/^I click on Completed button$/, async function () {
        await this.todo.clickCompleted();
    });

    this.When(/^I delete ([^"]*) onto todo list$/, async function (taskName) {
        await this.todo.deleteTask(taskName);
    });

    this.Then(/^([^"]*) should not be displayed on the todo list$/, async function (taskName) {
        const actual = await this.todo.checkTask(taskName);
        assert(!(actual));
    });

    this.When(/^I click on Clear completed button$/, async function () {
        await this.todo.clearCompleted();
    });

};