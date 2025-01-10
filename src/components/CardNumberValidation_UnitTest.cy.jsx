import App from "../App";
import "../App.css";
import "../index.css";

describe("Card Component Validation (Card Number", () => {

  it("does not accept an invalid card number", () => {
    cy.mount(<App />);
    cy.get("input[placeholder='1234-5678-9101-1121']").type("1234365");
    cy.get("input[type='date']").type("2025-12-31");
    cy.get("input[placeholder='123']").type("1214");
    cy.get("button").contains("Pay").click();
    cy.contains("Invalid card number").should("exist"); 
  });

});

