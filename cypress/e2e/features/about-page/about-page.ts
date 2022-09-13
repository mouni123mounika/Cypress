///   <reference types="cypress" />

import { And, Then, When } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the About Page", () => {
  cy.visit("/aboutus.html");
});

Then("I should see Facts & Figures at the bottom of About Page", () => {
  cy.get(".row")
    .eq(6)
    .should("be.visible")
    .should("contain", "Facts & Figures");
});

And("I should see Facts & Figures in a table format", () => {
  cy.get("table").parent(".table-responsive");
});
