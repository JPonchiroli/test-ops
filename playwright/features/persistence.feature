# Cenarios obrigatorios 1, 2 e 4 (paridade com os todo-*.feature do Cypress).
# Exigem Firebase configurado no ambiente de teste (NEXT_PUBLIC_FIREBASE_*)
# para que createIncomeEntry/createExpense persistam e o onSnapshot atualize a UI.

Feature: Persistencia de entradas e saidas no Firestore

  Background:
    Given que acesso a pagina inicial

  Scenario: Cadastro de entrada financeira atualiza o card de entradas
    When preencho o campo descricao da entrada com "Salário de abril"
    And preencho o campo valor da entrada com "5000"
    And seleciono a origem "Salario"
    And clico no botao "Salvar entrada"
    Then aparece a mensagem "Entrada cadastrada com sucesso."
    And o card "Entradas" esta visivel
    And o formulario de entrada esta limpo

  Scenario: Cadastro de saida manual aparece na lista de lancamentos
    When clico no botao "Saída Manual"
    And preencho o campo titulo da despesa com "Mercado semanal"
    And preencho o campo valor com "150.00"
    And seleciono a categoria "Alimentacao"
    And clico no botao "Salvar despesa"
    Then "Mercado semanal" aparece na lista de lancamentos

  Scenario: Confirmacao e limpeza do formulario apos salvar a saida
    When clico no botao "Saída Manual"
    And preencho o campo titulo da despesa com "Combustível"
    And preencho o campo valor com "75.50"
    And seleciono a categoria "Transporte"
    And clico no botao "Salvar despesa"
    Then aparece a mensagem "Despesa cadastrada com sucesso."
    And os campos titulo e valor estao vazios
