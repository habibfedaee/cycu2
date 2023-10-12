Feature: Login App

Scenario: invalid user Login

Given i enter login page
When i type incorrent login credentials
And i click login button
Then i should remain in login page
