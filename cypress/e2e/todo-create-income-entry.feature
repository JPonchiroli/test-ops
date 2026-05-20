# TODO implement: Desafio 1 — Persistência de entradas no Firestore
#
# Pré-requisito: concluir createIncomeEntry() em src/services/income-entry-service.ts
# e subscribeToIncomeEntries() para sincronização em tempo real.
#
# O que testar:
#   - Entrada salva reflete no card "Entradas" sem recarregar
#   - Saldo estimado aumenta após salvar uma entrada
#   - Formulário é limpo e mensagem de confirmação aparece
#   - Entradas persistem após recarregar a página (Firestore em tempo real)
#   - Valor zero ou negativo continua bloqueado com Firebase ativo

Feature: Criação de entrada financeira no Firestore

  Background:
    # TODO implement: iniciar o app com variáveis Firebase válidas no ambiente de teste
    Given que acesso a pagina inicial

  @todo
  Scenario: Salva uma entrada e atualiza o card de entradas
    When preencho a descricao com "Salário de abril"
    And preencho o valor com "5000"
    And seleciono a origem "Salario"
    And clico em "Salvar entrada"
    Then o card "Entradas" atualiza o valor total
    And aparece a mensagem "Entrada cadastrada com sucesso."

  @todo
  Scenario: Exibe confirmacao e reseta o formulario apos salvar
    When preencho a descricao com "Freelance"
    And preencho o valor com "1200"
    And seleciono a origem "Outros"
    And clico em "Salvar entrada"
    Then aparece a mensagem "Entrada cadastrada com sucesso."
    And o formulario de entrada esta limpo

  @todo
  Scenario: Entradas persistidas aparecem apos recarregar a pagina
    When preencho a descricao com "Bônus"
    And preencho o valor com "2500"
    And seleciono a origem "Salario"
    And clico em "Salvar entrada"
    Then a entrada "Bônus" persiste apos recarregar a pagina
