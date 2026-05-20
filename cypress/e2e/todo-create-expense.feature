# TODO implement: Desafio 1 — Persistência de saídas manuais no Firestore
#
# Pré-requisito: concluir createExpense() em src/services/expense-service.ts
# e configurar as variáveis NEXT_PUBLIC_FIREBASE_* no ambiente de testes.
#
# O que testar:
#   - Despesa salva aparece na lista "Lançamentos recentes" sem recarregar a página
#   - Saldo estimado diminui após salvar a despesa
#   - Formulário é limpo após o envio bem-sucedido
#   - Mensagem de confirmação "Despesa cadastrada com sucesso." é exibida
#   - Despesa excluída desaparece da lista em tempo real
#   - Valor negativo ou zero continua bloqueado mesmo com Firestore ativo

Feature: Criação de saída manual no Firestore

  Background:
    # TODO implement: iniciar o app com variáveis Firebase válidas no ambiente de teste
    Given que acesso a pagina inicial

  @todo
  Scenario: Salva uma saida manual com dados validos e exibe na lista
    When seleciono a aba "Saída Manual"
    And preencho o titulo com "Mercado semanal"
    And preencho o valor com "150.00"
    And seleciono a categoria "Alimentacao"
    And clico em "Salvar despesa"
    Then "Mercado semanal" aparece na lista de lancamentos
    And o card "Despesas" foi atualizado

  @todo
  Scenario: Exibe confirmacao e limpa o formulario apos salvar
    When seleciono a aba "Saída Manual"
    And preencho o titulo com "Combustível"
    And preencho o valor com "75.50"
    And seleciono a categoria "Transporte"
    And clico em "Salvar despesa"
    Then aparece a mensagem "Despesa cadastrada com sucesso."
    And os campos titulo e valor estao vazios

  @todo
  Scenario: Permite excluir uma saida existente da lista
    When seleciono a aba "Saída Manual"
    And preencho o titulo com "Despesa para exclusão"
    And preencho o valor com "50.00"
    And seleciono a categoria "Outros"
    And clico em "Salvar despesa"
    And clico no botao de exclusao
    Then "Despesa para exclusão" foi removida da lista
