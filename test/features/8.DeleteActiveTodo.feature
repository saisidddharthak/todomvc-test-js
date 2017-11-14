@ToDo_Tests

Feature: As a user, I should be able to delete single item

Background: Pre-condition steps to add new items
  Given I am on the ToDoMVC page
   When I add task1 onto todo list
   Then task1 should be displayed on the todo list
   When I add task2 onto todo list
   Then task1 should be displayed on the todo list

Scenario: As a user, I should be able to delete single item
   When I delete task1 onto todo list
   Then task1 should not be displayed on the todo list