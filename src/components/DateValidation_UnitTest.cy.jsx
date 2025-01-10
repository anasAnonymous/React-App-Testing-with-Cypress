import App from "../App";
import "../App.css";
import "../index.css";

describe("Card Component Validation (date)", () => {

    it('does not accept an invalid date (Past dates)', () => {
    cy.mount(<App />);
    cy.get("input[placeholder='1234-5678-9101-1121']").type("1234-5678-9101-1121");
    cy.get("input[type='date']").type("2020-12-31");
    cy.get("input[placeholder='123']").type("1214");
    cy.get("button").contains("Pay").click();
    cy.contains("Invalid date").should("exist"); 
  });

});

