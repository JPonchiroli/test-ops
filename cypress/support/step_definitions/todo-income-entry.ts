import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("preencho a descricao com {string}", (value: string) => {
  cy.get("#income-title").clear().type(value);
});

When("preencho o valor com {string}", (value: string) => {
  cy.get("#income-amount").clear().type(value);
});

When("seleciono a origem {string}", (source: string) => {
  cy.get("#income-source").select(source);
});

Then("o card {string} atualiza o valor total", (cardTitle: string) => {
  // Verify that the Entradas card is visible and updated
  cy.contains(cardTitle).should("be.visible");
});

Then("aparece a mensagem {string}", (message: string) => {
  cy.contains(message).should("be.visible");
});

Then("o formulario de entrada esta limpo", () => {
  cy.get("#income-title").should("have.value", "");
  cy.get("#income-amount").should("have.value", "");
});

Then("a entrada {string} persiste apos recarregar a pagina", (title: string) => {
  cy.contains(title).should("be.visible");
  cy.reload();
  cy.contains(title).should("be.visible");
});
