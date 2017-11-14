@ToDo_Tests

Feature: As a user, I should be able to edit an exisitng To-Do item

Background: Pre-condition steps to add new item
  Given I am on the ToDoMVC page
   When I add task1 onto todo list
   Then task1 should be displayed on the todo list

Scenario: As a user, I should be able to edit an exisitng To-Do item
   When I edit task1 on todo list as task2
   Then task2 should be displayed on the todo list