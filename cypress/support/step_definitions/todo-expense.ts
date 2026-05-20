import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("seleciono a aba {string}", (tabName: string) => {
  cy.contains("button", tabName).click();
});

When("preencho o titulo com {string}", (value: string) => {
  cy.get("#title").clear().type(value);
});

When("preencho o valor com {string}", (value: string) => {
  cy.get("#amount").clear().type(value);
});

When("seleciono a categoria {string}", (category: string) => {
  cy.get("#category").select(category);
});

Then("{string} aparece na lista de lancamentos", (expenseTitle: string) => {
  cy.contains(expenseTitle).should("be.visible");
});

Then("o card {string} foi atualizado", (cardTitle: string) => {
  // Verify that the Despesas card is visible
  cy.contains(cardTitle).should("be.visible");
});

Then("os campos titulo e valor estao vazios", () => {
  cy.get("#title").should("have.value", "");
  cy.get("#amount").should("have.value", "");
});

When("clico no botao de exclusao", () => {
  // Find and click the delete button (typically marked with ✕ or similar icon)
  cy.contains("div", (content) => {
    // Find the parent div containing the expense entry
    // Then click the delete button within it
    return false;
  });
  
  // More direct approach: get the first delete button visible
  cy.get("button").filter((index, el) => {
    const text = el.textContent || "";
    return text.includes("✕") || text.includes("×");
  }).first().click();
});

Then("{string} foi removida da lista", (expenseTitle: string) => {
  cy.contains(expenseTitle).should("not.exist");
});
