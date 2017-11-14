@ToDo_Tests 

Feature: As a user, I should be able to new Item to an existing list of To-Do items

Background: As a user, I should be able to Add New To Do Item
   Given I am on the ToDoMVC page
    When I add task1 onto todo list
    Then task1 should be displayed on the todo list

Scenario: As a user, I should be able to new Item to an existing list of To-Do items
    When I add task2 onto todo list
    Then task2 should be displayed on the todo list