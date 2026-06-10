# TODO implement: Desafio 3 — Extração de dados por OCR e salvamento como despesa
#
# Pré-requisito: implementar a rota /api/receipt-extraction com um provedor de OCR
# (Claude API, Google Vision ou Tesseract.js), integrar o resultado ao ReceiptUploadPanel
# e conectar o salvamento ao Firestore via expense-service.ts.
#
# O que testar:
#   - Upload de PDF válido aciona OCR, extrai nome e valor, e salva como despesa
#   - Mensagem de sucesso "Despesa criada automaticamente a partir da nota fiscal." é exibida
#   - A rota retorna os campos esperados no contrato (establishmentName, amount, suggestedCategory)

# @skip: Feature 03 (OCR) e opcional e a rota /api/receipt-extraction ainda
# retorna 501 (stub). Estes cenarios so passam apos integrar um provedor de OCR.
# O contrato atual (501) ja e coberto por receipt-extraction-api.feature.
@skip
Feature: Extração de nota fiscal por OCR

  Background:
    Given que acesso a pagina inicial
    When clico no botao "Nota Fiscal"

  Scenario: Extrai dados de uma nota fiscal em PDF e salva como despesa
    When seleciono o arquivo "nota-mercado.pdf" do tipo "application/pdf"
    And clico no botao "Analisar nota fiscal"
    Then aparece a mensagem "Despesa criada automaticamente a partir da nota fiscal."
    And "nota-mercado" aparece na lista de lancamentos

  Scenario: Exibe mensagem de sucesso apos importar a nota fiscal
    When seleciono o arquivo "nota-farmacia.pdf" do tipo "application/pdf"
    And clico no botao "Analisar nota fiscal"
    Then aparece a mensagem "Despesa criada automaticamente a partir da nota fiscal."

  Scenario: A rota de OCR retorna os campos esperados no contrato
    When faço upload de um arquivo "application/pdf" para "/api/receipt-extraction"
    Then a resposta deve ter status 200
    And a resposta deve conter o campo "establishmentName"
    And a resposta deve conter o campo "amount"
    And a resposta deve conter o campo "suggestedCategory"
