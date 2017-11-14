@ToDo_Tests

Feature: As a user, I should be able to add new To-Do Item

Scenario: As a user, I should be able to add new To-Do Item
   Given I am on the ToDoMVC page
    When I add task1 onto todo list
    Then task1 should be displayed on the todo list