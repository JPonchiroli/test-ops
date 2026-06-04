// Generated from: features\income-entry-form.feature
import { test } from "playwright-bdd";

test.describe('Formulario de cadastro de entradas', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('que acesso a pagina inicial', null, { page }); 
  });
  
  test('Renderiza o titulo do formulario de entradas', async ({ Then, page }) => { 
    await Then('vejo o heading "Cadastro de entradas"', null, { page }); 
  });

  test('Exibe aviso de scaffold da feature de entradas', async ({ Then, page }) => { 
    await Then('vejo o texto "TODO implement: esta feature deve ser concluída"', null, { page }); 
  });

  test('Exibe o select de origem da entrada', async ({ Then, page }) => { 
    await Then('vejo o label "Origem"', null, { page }); 
  });

  test('Bloqueia o envio quando a descricao esta vazia', async ({ When, Then, page }) => { 
    await When('submeto o formulario de entradas sem preencher nenhum campo', null, { page }); 
    await Then('vejo o erro de validacao "Informe a descrição da entrada."', null, { page }); 
  });

  test('Bloqueia o envio com valor zero na entrada', async ({ When, Then, And, page }) => { 
    await When('preencho o campo descricao da entrada com "Salario"', null, { page }); 
    await And('preencho o campo valor da entrada com "0"', null, { page }); 
    await And('clico no botao "Salvar entrada"', null, { page }); 
    await Then('vejo o erro de validacao "Digite um valor maior que zero."', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\income-entry-form.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then vejo o heading \"Cadastro de entradas\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Cadastro de entradas\"","children":[{"start":16,"value":"Cadastro de entradas","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":14,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then vejo o texto \"TODO implement: esta feature deve ser concluída\"","stepMatchArguments":[{"group":{"start":13,"value":"\"TODO implement: esta feature deve ser concluída\"","children":[{"start":14,"value":"TODO implement: esta feature deve ser concluída","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then vejo o label \"Origem\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Origem\"","children":[{"start":14,"value":"Origem","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"When submeto o formulario de entradas sem preencher nenhum campo","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then vejo o erro de validacao \"Informe a descrição da entrada.\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Informe a descrição da entrada.\"","children":[{"start":26,"value":"Informe a descrição da entrada.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":27,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When preencho o campo descricao da entrada com \"Salario\"","stepMatchArguments":[{"group":{"start":42,"value":"\"Salario\"","children":[{"start":43,"value":"Salario","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And preencho o campo valor da entrada com \"0\"","stepMatchArguments":[{"group":{"start":38,"value":"\"0\"","children":[{"start":39,"value":"0","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And clico no botao \"Salvar entrada\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Salvar entrada\"","children":[{"start":16,"value":"Salvar entrada","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then vejo o erro de validacao \"Digite um valor maior que zero.\"","stepMatchArguments":[{"group":{"start":25,"value":"\"Digite um valor maior que zero.\"","children":[{"start":26,"value":"Digite um valor maior que zero.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end