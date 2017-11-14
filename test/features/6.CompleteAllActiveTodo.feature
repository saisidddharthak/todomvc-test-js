@ToDo_Tests

Feature: As a user, I should be able to complete all active tasks by clicking the down arrow at the top-left of the UI

Background: Pre-condition steps to add new items
  Given I am on the ToDoMVC page
   When I add task1 onto todo list
   Then task1 should be displayed on the todo list
   When I add task2 onto todo list
   Then task2 should be displayed on the todo list

Scenario: As a user, I should be able to complete all active tasks by clicking the down arrow at the top-left of the UI
   When I complete-all tasks on todo list
   Then the task1 should be completed
    And the task2 should be completed