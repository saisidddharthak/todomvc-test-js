@ToDo_Tests

Feature: As a user, I should be able to clear all the completed items

Background: Pre-condition steps to add new items
  Given I am on the ToDoMVC page
   When I add task1 onto todo list
   Then task1 should be displayed on the todo list
   When I add task2 onto todo list
   Then task1 should be displayed on the todo list
    And I complete-all tasks on todo list
   When I add task3 onto todo list
   Then task3 should be displayed on the todo list

Scenario: As a user, I should be able to clear all the completed items
   When I click on Clear completed button 
   Then task1 should not be displayed on the todo list
   Then task2 should not be displayed on the todo list
   Then task3 should be displayed on the todo list