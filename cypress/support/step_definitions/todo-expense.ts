import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("seleciono a aba {string}", (tabName: string) => {
  const tabMap: Record<string, string> = {
    Entradas: "tab-income",
    "Saída Manual": "tab-expense",
    "Nota Fiscal": "tab-receipt",
  };

  const tabId = tabMap[tabName] ?? null;

  if (tabId) {
    cy.get(`[data-cy=${tabId}]`).click();
  } else {
    cy.contains("button", tabName).click();
  }
});

When("preencho o titulo com {string}", (value: string) => {
  cy.get("[data-cy=expense-title]").clear().type(value);
});

When("preencho o valor com {string}", (value: string) => {
  cy.get("[data-cy=expense-amount]").clear().type(value);
});

When("seleciono a categoria {string}", (category: string) => {
  cy.get("[data-cy=expense-category]").select(category);
});

Then("{string} aparece na lista de lancamentos", (expenseTitle: string) => {
  cy.contains(expenseTitle).should("be.visible");
});

Then("o card {string} foi atualizado", (cardTitle: string) => {
  // Verify that the Despesas card is visible
  cy.contains(cardTitle).should("be.visible");
});

Then("os campos titulo e valor estao vazios", () => {
  cy.get("[data-cy=expense-title]").should("have.value", "");
  cy.get("[data-cy=expense-amount]").should("have.value", "");
});

When("clico no botao de exclusao", () => {
  cy.contains("button", "✕").first().click();
});

Then("{string} foi removida da lista", (expenseTitle: string) => {
  cy.contains(expenseTitle).should("not.exist");
});
