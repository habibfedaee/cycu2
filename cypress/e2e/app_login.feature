Feature: Login App

Scenario: standard user Login

Given i enter login page
When i type login credentials
And i click login button
Then i should be in home page
