# Cenario obrigatorio 3 (exclusao de despesa).
# O Background cadastra uma despesa com titulo UNICO por execucao e o playwright-bdd
# o gera como test.beforeEach, isolando o estado (ENUNCIADO). O titulo unico evita
# colisao com dados pre-existentes no Firestore real e permite mirar o botao exato.
# Exige Firebase configurado no ambiente de teste (NEXT_PUBLIC_FIREBASE_*).

Feature: Exclusao de saida manual

  Background:
    Given que acesso a pagina inicial
    When cadastro uma saida manual unica para exclusao
    Then a saida cadastrada aparece na lista de lancamentos

  Scenario: Excluir a despesa remove o item da lista
    When excluo a saida recem-cadastrada
    Then a saida excluida nao aparece mais na lista
