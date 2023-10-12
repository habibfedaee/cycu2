import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

//Given
Given("i enter login page", () => {
  //cy.visit("https://saucedemo.com");
  cy.visit("/");
});
// When:
When("i type incorrent login credentials", () => {
  cy.get("#user-name").type(Cypress.env("invalid_user"));
  cy.get("#password").type(Cypress.en("invalid_pass"));
});

// And
And("i click login button", () => {
  cy.get("#login-button").click();
});

// Then
Then("i should remain in login page", () => {
  //assert if you are still in login page
  cy.get(" div > div.login_logo").should("have.text", "Swag Labs");
});
