import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("seleciono a aba {string}", (tabName: string) => {
<<<<<<< HEAD
  cy.contains("button", tabName)
    .should("be.visible")
    .click({ force: true })
    .then(() => cy.wait(200));
=======
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
>>>>>>> c61de8b8d670f90b71aaf18a8b097c25c1cd03c0
});

When("preencho o titulo com {string}", (value: string) => {
  cy.get("[data-cy=expense-title]").clear().type(value);
});

When("preencho o valor com {string}", (value: string) => {
<<<<<<< HEAD
  cy.get("body").then(($body) => {
    if ($body.find('#amount').length) {
      cy.get('#amount').clear().type(value);
    } else if ($body.find('#income-amount').length) {
      cy.get('#income-amount').clear().type(value);
    } else {
      throw new Error('Campo de valor não encontrado (#amount ou #income-amount)');
    }
  });
=======
  cy.get("[data-cy=expense-amount]").clear().type(value);
>>>>>>> c61de8b8d670f90b71aaf18a8b097c25c1cd03c0
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
