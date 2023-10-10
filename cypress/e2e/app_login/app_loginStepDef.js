import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("i enter login page", () => {
  //cy.visit("https://saucedemo.com");
  cy.visit("/");
});

When("i type login credentials", () => {
  //cy.get("#user-name").type("standard_user");
  cy.get("#user-name").type(Cypress.env("standard_user"));
  //cy.get("#password").type("secret_sauce");
  cy.get("#password").type(Cypress.env("standard_pass"));
});
And("i click login button", () => {
  cy.get("#login-button").click();
});

Then("i should be in home page", () => {
  cy.get(
    "#header_container > div.primary_header > div.header_label > div"
  ).should("have.text", "Swag Labs");
});
