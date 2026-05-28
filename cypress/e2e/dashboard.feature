Feature: Dashboard principal

  Background:
    Given que acesso a pagina inicial

  Scenario: Exibe os tres cards de resumo financeiro
    Then vejo o card com titulo "Entradas"
    And vejo o card com titulo "Despesas"
    And vejo o card com titulo "Lançamentos"

  Scenario: Exibe o link de instrucoes
    Then vejo o texto "Instruções"

  Scenario: Exibe o saldo na barra superior
    Then vejo o texto "Saldo"

  Scenario: Exibe a secao de orcamento
    Then vejo o texto "Orçamento"

  Scenario: Exibe o titulo principal do sistema
    Then vejo o texto "Fluxo Financeiro"