import { When } from "@badeball/cypress-cucumber-preprocessor";

When(
  "seleciono o arquivo {string} do tipo {string}",
  (filename: string, mimeType: string) => {
    cy.contains("h2", "Saída por leitura de PDF ou imagem").should("be.visible");
    cy.get('[data-cy=receipt-file-input]').selectFile(
      {
        contents: Cypress.Buffer.from("dummy content"),
        fileName: filename,
        mimeType: mimeType,
      },
      { force: true },
    );
  },
);
