# BDD-first: cenários escritos ANTES da implementação da rota de OCR.
# Estes cenários falharão até que /api/receipt-extraction seja implementado
# com um provedor real (Claude API, Google Vision ou Tesseract.js).
#
# Abordagem: escrever o "o que" (comportamento esperado) antes do "como" (código).
# Os step definitions chamam ações do Playwright sobre a interface real.

Feature: Extração de nota fiscal por OCR

  Scenario: Upload de PDF valido extrai dados e salva despesa
    Given que acesso a pagina inicial
    When clico no botao "Nota Fiscal"
    And seleciono o arquivo "nota-mercado.pdf" do tipo "application/pdf"
    And clico no botao "Analisar nota fiscal"
    Then o sistema deve exibir a mensagem de sucesso de extracao
    And o dashboard deve exibir a nova despesa na lista de lancamentos

  Scenario: Exibe mensagem de erro quando OCR ainda nao esta implementado
    Given que acesso a pagina inicial
    When clico no botao "Nota Fiscal"
    And seleciono o arquivo "nota-farmacia.pdf" do tipo "application/pdf"
    And clico no botao "Analisar nota fiscal"
    Then vejo o alerta com texto de erro da extracao

  Scenario: A rota de OCR implementada retorna os campos do contrato
    Given que acesso a pagina inicial
    When faco um upload de arquivo "application/pdf" para "/api/receipt-extraction"
    Then a resposta deve ter status 200
    And a resposta deve conter o campo "establishmentName"
    And a resposta deve conter o campo "amount"
    And a resposta deve conter o campo "suggestedCategory"
    And a resposta deve conter o campo "purchaseDate"
