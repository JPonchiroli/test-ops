// Generated from: features\persistence.feature
import { test } from "playwright-bdd";

test.describe('Persistencia de entradas e saidas no Firestore', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('que acesso a pagina inicial', null, { page }); 
  });
  
  test('Cadastro de entrada financeira atualiza o card de entradas', async ({ When, Then, And, page }) => { 
    await When('preencho o campo descricao da entrada com "Salário de abril"', null, { page }); 
    await And('preencho o campo valor da entrada com "5000"', null, { page }); 
    await And('seleciono a origem "Salario"', null, { page }); 
    await And('clico no botao "Salvar entrada"', null, { page }); 
    await Then('aparece a mensagem "Entrada cadastrada com sucesso."', null, { page }); 
    await And('o card "Entradas" esta visivel', null, { page }); 
    await And('o formulario de entrada esta limpo', null, { page }); 
  });

  test('Cadastro de saida manual aparece na lista de lancamentos', async ({ When, Then, And, page }) => { 
    await When('clico no botao "Saída Manual"', null, { page }); 
    await And('preencho o campo titulo da despesa com "Mercado semanal"', null, { page }); 
    await And('preencho o campo valor com "150.00"', null, { page }); 
    await And('seleciono a categoria "Alimentacao"', null, { page }); 
    await And('clico no botao "Salvar despesa"', null, { page }); 
    await Then('"Mercado semanal" aparece na lista de lancamentos', null, { page }); 
  });

  test('Confirmacao e limpeza do formulario apos salvar a saida', async ({ When, Then, And, page }) => { 
    await When('clico no botao "Saída Manual"', null, { page }); 
    await And('preencho o campo titulo da despesa com "Combustível"', null, { page }); 
    await And('preencho o campo valor com "75.50"', null, { page }); 
    await And('seleciono a categoria "Transporte"', null, { page }); 
    await And('clico no botao "Salvar despesa"', null, { page }); 
    await Then('aparece a mensagem "Despesa cadastrada com sucesso."', null, { page }); 
    await And('os campos titulo e valor estao vazios', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\persistence.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When preencho o campo descricao da entrada com \"Salário de abril\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Salário de abril\"","children":[{"start":43,"value":"Salário de abril","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And preencho o campo valor da entrada com \"5000\"","stepMatchArguments":[{"group":{"start":38,"value":"\"5000\"","children":[{"start":39,"value":"5000","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And seleciono a origem \"Salario\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Salario\"","children":[{"start":20,"value":"Salario","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And clico no botao \"Salvar entrada\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Salvar entrada\"","children":[{"start":16,"value":"Salvar entrada","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then aparece a mensagem \"Entrada cadastrada com sucesso.\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Entrada cadastrada com sucesso.\"","children":[{"start":20,"value":"Entrada cadastrada com sucesso.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And o card \"Entradas\" esta visivel","stepMatchArguments":[{"group":{"start":7,"value":"\"Entradas\"","children":[{"start":8,"value":"Entradas","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And o formulario de entrada esta limpo","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When clico no botao \"Saída Manual\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Saída Manual\"","children":[{"start":16,"value":"Saída Manual","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And preencho o campo titulo da despesa com \"Mercado semanal\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Mercado semanal\"","children":[{"start":40,"value":"Mercado semanal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And preencho o campo valor com \"150.00\"","stepMatchArguments":[{"group":{"start":27,"value":"\"150.00\"","children":[{"start":28,"value":"150.00","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And seleciono a categoria \"Alimentacao\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Alimentacao\"","children":[{"start":23,"value":"Alimentacao","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And clico no botao \"Salvar despesa\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Salvar despesa\"","children":[{"start":16,"value":"Salvar despesa","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then \"Mercado semanal\" aparece na lista de lancamentos","stepMatchArguments":[{"group":{"start":0,"value":"\"Mercado semanal\"","children":[{"start":1,"value":"Mercado semanal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When clico no botao \"Saída Manual\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Saída Manual\"","children":[{"start":16,"value":"Saída Manual","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"And preencho o campo titulo da despesa com \"Combustível\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Combustível\"","children":[{"start":40,"value":"Combustível","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And preencho o campo valor com \"75.50\"","stepMatchArguments":[{"group":{"start":27,"value":"\"75.50\"","children":[{"start":28,"value":"75.50","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And seleciono a categoria \"Transporte\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Transporte\"","children":[{"start":23,"value":"Transporte","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"And clico no botao \"Salvar despesa\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Salvar despesa\"","children":[{"start":16,"value":"Salvar despesa","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then aparece a mensagem \"Despesa cadastrada com sucesso.\"","stepMatchArguments":[{"group":{"start":19,"value":"\"Despesa cadastrada com sucesso.\"","children":[{"start":20,"value":"Despesa cadastrada com sucesso.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"And os campos titulo e valor estao vazios","stepMatchArguments":[]}]},
]; // bdd-data-end