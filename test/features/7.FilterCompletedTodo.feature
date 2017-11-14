@ToDo_Tests
 
Feature: As a user, I should be able to view only the completed To-Do items

Background: Pre-condition steps to add new items amd Complete it
  Given I am on the ToDoMVC page
   When I add task1 onto todo list
   Then task1 should be displayed on the todo list
    And I add task2 onto todo list
   Then task2 should be displayed on the todo list
    And I complete-all tasks on todo list

Scenario: As a user, I should be able to view only the completed To-Do items
   When I click on Completed button 
   Then task1 should be displayed on the todo list
    And task2 should be displayed on the todo list
