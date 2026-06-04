Feature: API de extracao de nota fiscal

  Background:
    Given que acesso a pagina inicial

  Scenario: Retorna 400 quando nenhum arquivo e enviado
    When faco um POST para "/api/receipt-extraction" sem body
    Then a resposta deve ter status 400
    And a resposta deve conter o campo "error"

  Scenario: Retorna 415 quando o tipo do arquivo nao e suportado
    When faco um upload de arquivo "text/plain" para "/api/receipt-extraction"
    Then a resposta deve ter status 415
    And a resposta deve conter o campo "error"

  Scenario: Retorna 501 para arquivo valido enquanto OCR nao e implementado
    When faco um upload de arquivo "application/pdf" para "/api/receipt-extraction"
    Then a resposta deve ter status 501
    And a resposta deve conter o campo "error"
    And a resposta deve conter o campo "expectedFields"
