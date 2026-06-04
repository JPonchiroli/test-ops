// Generated from: features\dashboard.feature
import { test } from "playwright-bdd";

test.describe('Dashboard principal', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('que acesso a pagina inicial', null, { page }); 
  });
  
  test('Exibe os tres cards de resumo financeiro', async ({ Then, And, page }) => { 
    await Then('vejo o card com titulo "Entradas"', null, { page }); 
    await And('vejo o card com titulo "Despesas"', null, { page }); 
    await And('vejo o card com titulo "Lançamentos"', null, { page }); 
  });

  test('Exibe o grafico de comparacao financeira', async ({ Then, page }) => { 
    await Then('vejo o heading "Gastos vs. Entradas"', null, { page }); 
  });

  test('Exibe o saldo projetado na secao de orcamento', async ({ Then, page }) => { 
    await Then('vejo o texto "Saldo projetado"', null, { page }); 
  });

  test('Exibe as barras de acompanhamento no grafico', async ({ Then, And, page }) => { 
    await Then('vejo o texto "Entradas previstas"', null, { page }); 
    await And('vejo o texto "Gastos acumulados"', null, { page }); 
  });

  test('Exibe o titulo principal do sistema', async ({ Then, page }) => { 
    await Then('vejo o texto "Fluxo Financeiro"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\dashboard.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then vejo o card com titulo \"Entradas\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Entradas\"","children":[{"start":24,"value":"Entradas","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"And vejo o card com titulo \"Despesas\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Despesas\"","children":[{"start":24,"value":"Despesas","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And vejo o card com titulo \"Lançamentos\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Lançamentos\"","children":[{"start":24,"value":"Lançamentos","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then vejo o heading \"Gastos vs. Entradas\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Gastos vs. Entradas\"","children":[{"start":16,"value":"Gastos vs. Entradas","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then vejo o texto \"Saldo projetado\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Saldo projetado\"","children":[{"start":14,"value":"Saldo projetado","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":17,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then vejo o texto \"Entradas previstas\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Entradas previstas\"","children":[{"start":14,"value":"Entradas previstas","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And vejo o texto \"Gastos acumulados\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Gastos acumulados\"","children":[{"start":14,"value":"Gastos acumulados","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then vejo o texto \"Fluxo Financeiro\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Fluxo Financeiro\"","children":[{"start":14,"value":"Fluxo Financeiro","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end