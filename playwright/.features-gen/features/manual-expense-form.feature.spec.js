// Generated from: features\manual-expense-form.feature
import { test } from "playwright-bdd";

test.describe('Formulario de saida manual', () => {

  test.beforeEach('Background', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
    await Given('que acesso a pagina inicial', null, { page }); 
    await When('clico no botao "Saída Manual"', null, { page }); 
  });
  
  test('Renderiza o titulo do formulario', async ({ Then, page }) => { 
    await Then('vejo o heading "Saída manual"', null, { page }); 
  });

  test('Exibe aviso de scaffold da feature', async ({ Then, page }) => { 
    await Then('vejo o texto "TODO implement: esta feature deve ser concluída"', null, { page }); 
  });

  test('Exibe o label de categoria no formulario', async ({ Then, page }) => { 
    await Then('vejo o label "Categoria"', null, { page }); 
  });

  test('Bloqueia o envio quando o titulo esta vazio', async ({ When, Then, page }) => { 
    await When('submeto o formulario de saida manual sem preencher nenhum campo', null, { page }); 
    await Then('vejo o erro de validacao "Informe o título da despesa."', null, { page }); 
  });

  test('Bloqueia o envio com valor zero', async ({ When, Then, And, page }) => { 
    await When('preencho o campo titulo da despesa com "Mercado"', null, { page }); 
    await And('preencho o campo valor com "0"', null, { page }); 
    await And('clico no botao "Salvar despesa"', null, { page }); 
    await Then('vejo o erro de validacao "Digite um valor maior que zero."', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\manual-expense-form.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When clico no botao \"Saída Manual\"","isBg":true,"stepMatchArguments":[{"group":{"start":15,"value":"\"Saída Manual\"","children":[{"start":16,"value":"Saída Manual","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then vejo o heading \"Saída manual\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Saída manual\"","children":[{"start":16,"value":"Saída manual","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When clico no botao \"Saída Manual\"","isBg":true,"stepMatchArguments":[{"group":{"start":15,"value":"\"Saída Manual\"","children":[{"start":16,"value":"Saída Manual","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then vejo o texto \"TODO implement: esta feature deve ser concluída\"","stepMatchArguments":[{"group":{"start":13,"value":"\"TODO implement: esta feature deve ser concluída\"","children":[{"start":14,"value":"TODO implement: esta feature deve ser concluída","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When clico no botao \"Saída Manual\"","isBg":true,"stepMatchArguments":[{"group":{"start":15,"value":"\"Saída Manual\"","children":[{"start":16,"value":"Saída Manual","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then vejo o label \"Categoria\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Categoria\"","children":[{"start":14,"value":"Categoria","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When clico no botao \"Saída Manual\"","isBg":true,"stepMatchArguments":[{"group":{"start":15,"value":"\"Saída Manual\"","children":[{"start":16,"value":"Saída Manual","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When submeto o formulario de saida manual sem preencher nenhum campo","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then vejo o erro de validacao \"Informe o título da despesa.\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Informe o título da despesa.\"","children":[{"start":26,"value":"Informe o título da despesa.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":28,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When clico no botao \"Saída Manual\"","isBg":true,"stepMatchArguments":[{"group":{"start":15,"value":"\"Saída Manual\"","children":[{"start":16,"value":"Saída Manual","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When preencho o campo titulo da despesa com \"Mercado\"","stepMatchArguments":[{"group":{"start":39,"value":"\"Mercado\"","children":[{"start":40,"value":"Mercado","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And preencho o campo valor com \"0\"","stepMatchArguments":[{"group":{"start":27,"value":"\"0\"","children":[{"start":28,"value":"0","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And clico no botao \"Salvar despesa\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Salvar despesa\"","children":[{"start":16,"value":"Salvar despesa","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then vejo o erro de validacao \"Digite um valor maior que zero.\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Digite um valor maior que zero.\"","children":[{"start":26,"value":"Digite um valor maior que zero.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end