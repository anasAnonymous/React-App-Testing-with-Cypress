import App from "../App";
import "../App.css";
import "../index.css";

describe("Card Incomplete info validation", () => {
    it("shows an error message when fields are incomplete", () => {
        cy.mount(<App />);
        cy.get("button").contains("Pay").click();
        cy.contains("Please fill out all fields.").should("exist");
      });
    
});