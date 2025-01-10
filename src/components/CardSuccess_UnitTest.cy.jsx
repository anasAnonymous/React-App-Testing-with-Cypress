import App from "../App";
import "../App.css";
import "../index.css";

describe("Card Component Success Flow", () => {
  it("shows a success message with valid input", () => {
    cy.mount(<App />);
    cy.get("input[placeholder='1234-5678-9101-1121']").type("1234-5678-9012-3456");
    cy.get("input[type='date']").type("2025-12-31");
    cy.get("input[placeholder='123']").type("123");
    cy.get("button").contains("Pay").click();
    cy.contains("Payment Successful!").should("exist");
  });
});
