@ToDo_Tests

Feature: As a user, I should be able to complete and re-activate an existing To-Do item

Background: Pre-condition steps to add new item
  Given I am on the ToDoMVC page
   When I add task1 onto todo list
   Then task1 should be displayed on the todo list

Scenario: As a user, I should be able to complete and re-activate an existing To-Do item
   When I complete task1 on todo list
   Then the task1 should be completed
   When I re-activate task1 on todo list
   Then the task1 should be re-activated