import App from "../App";
import "../App.css";
import "../index.css";

describe("Card Component Rendering", () => {
  it("renders the payment form with all fields", () => {
    cy.mount(<App />);
    cy.contains("Payment Form").should("exist");
    cy.get("input[placeholder='1234-5678-9101-1121']").should("exist");
    cy.get("input[placeholder='MM/YY']").should("exist");
    cy.get("input[placeholder='123']").should("exist");
    cy.get("button").contains("Pay").should("exist");
  });
});
