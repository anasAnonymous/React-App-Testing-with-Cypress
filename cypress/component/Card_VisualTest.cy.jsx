/// <reference types="cypress" />
import { mount } from "cypress/react"; 
import App from "../../src/App";
import "../../src/App.css";
import "../../src/index.css";

describe("Card Component Tests", () => {
  beforeEach(() => {
    // Mount the main App before each test
    mount(<App />);
  });

  it("should render the card form correctly", () => {
    
    cy.get(".card-container").should("exist"); 
    cy.get("form").should("exist"); 
    cy.get("input[placeholder='1234-5678-9101-1121']").should("exist"); 
    cy.get("input[type='date']").should("exist"); 
    cy.get("input[placeholder='123']").should("exist"); 
  });

  it("should match the visual snapshot of the card component", () => {
    // Match the visual snapshot for the card container
    cy.get(".card-container").matchImageSnapshot("updated-card-component");
  });
});
