Feature: Dashboard principal

  Background:
    Given que acesso a pagina inicial

  Scenario: Exibe os tres cards de resumo financeiro
    Then vejo o card com titulo "Entradas"
    And vejo o card com titulo "Despesas"
    And vejo o card com titulo "Lançamentos"

  Scenario: Exibe o grafico de comparacao financeira
    Then vejo o heading "Gastos vs. Entradas"

  Scenario: Exibe o saldo projetado na secao de orcamento
    Then vejo o texto "Saldo projetado"

  Scenario: Exibe as barras de acompanhamento no grafico
    Then vejo o texto "Entradas previstas"
    And vejo o texto "Gastos acumulados"

  Scenario: Exibe o titulo principal do sistema
    Then vejo o texto "Fluxo Financeiro"
