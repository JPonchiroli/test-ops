// Generated from: features\receipt-upload-panel.feature
import { test } from "playwright-bdd";

test.describe('Painel de upload de nota fiscal', () => {

  test.beforeEach('Background', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
    await Given('que acesso a pagina inicial', null, { page }); 
    await When('clico no botao "Nota Fiscal"', null, { page }); 
  });
  
  test('Renderiza o titulo do painel de upload', async ({ Then, page }) => { 
    await Then('vejo o heading "Saída por leitura de PDF ou imagem"', null, { page }); 
  });

  test('Exibe os tipos de arquivo aceitos', async ({ Then, page }) => { 
    await Then('vejo o texto "PDF, JPG, PNG ou WEBP"', null, { page }); 
  });

  test('Exibe o botao de analisar nota fiscal', async ({ Then, page }) => { 
    await Then('vejo o botao "Analisar nota fiscal"', null, { page }); 
  });

  test('Exibe o nome do arquivo apos selecionar um PDF valido', async ({ When, Then, And, page }) => { 
    await When('seleciono o arquivo "nota-mercado.pdf" do tipo "application/pdf"', null, { page }); 
    await Then('vejo o texto "Arquivo pronto para análise:"', null, { page }); 
    await And('vejo o texto "nota-mercado.pdf"', null, { page }); 
  });

  test('Exibe erro ao tentar analisar sem selecionar arquivo', async ({ When, Then, page }) => { 
    await When('clico no botao "Analisar nota fiscal"', null, { page }); 
    await Then('vejo o alerta "Selecione uma nota fiscal em PDF ou imagem para continuar."', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\receipt-upload-panel.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When clico no botao \"Nota Fiscal\"","isBg":true,"stepMatchArguments":[{"group":{"start":15,"value":"\"Nota Fiscal\"","children":[{"start":16,"value":"Nota Fiscal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then vejo o heading \"Saída por leitura de PDF ou imagem\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Saída por leitura de PDF ou imagem\"","children":[{"start":16,"value":"Saída por leitura de PDF ou imagem","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When clico no botao \"Nota Fiscal\"","isBg":true,"stepMatchArguments":[{"group":{"start":15,"value":"\"Nota Fiscal\"","children":[{"start":16,"value":"Nota Fiscal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then vejo o texto \"PDF, JPG, PNG ou WEBP\"","stepMatchArguments":[{"group":{"start":13,"value":"\"PDF, JPG, PNG ou WEBP\"","children":[{"start":14,"value":"PDF, JPG, PNG ou WEBP","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When clico no botao \"Nota Fiscal\"","isBg":true,"stepMatchArguments":[{"group":{"start":15,"value":"\"Nota Fiscal\"","children":[{"start":16,"value":"Nota Fiscal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then vejo o botao \"Analisar nota fiscal\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Analisar nota fiscal\"","children":[{"start":14,"value":"Analisar nota fiscal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When clico no botao \"Nota Fiscal\"","isBg":true,"stepMatchArguments":[{"group":{"start":15,"value":"\"Nota Fiscal\"","children":[{"start":16,"value":"Nota Fiscal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When seleciono o arquivo \"nota-mercado.pdf\" do tipo \"application/pdf\"","stepMatchArguments":[{"group":{"start":20,"value":"\"nota-mercado.pdf\"","children":[{"start":21,"value":"nota-mercado.pdf","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"application/pdf\"","children":[{"start":48,"value":"application/pdf","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then vejo o texto \"Arquivo pronto para análise:\"","stepMatchArguments":[{"group":{"start":13,"value":"\"Arquivo pronto para análise:\"","children":[{"start":14,"value":"Arquivo pronto para análise:","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And vejo o texto \"nota-mercado.pdf\"","stepMatchArguments":[{"group":{"start":13,"value":"\"nota-mercado.pdf\"","children":[{"start":14,"value":"nota-mercado.pdf","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When clico no botao \"Nota Fiscal\"","isBg":true,"stepMatchArguments":[{"group":{"start":15,"value":"\"Nota Fiscal\"","children":[{"start":16,"value":"Nota Fiscal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When clico no botao \"Analisar nota fiscal\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Analisar nota fiscal\"","children":[{"start":16,"value":"Analisar nota fiscal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then vejo o alerta \"Selecione uma nota fiscal em PDF ou imagem para continuar.\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Selecione uma nota fiscal em PDF ou imagem para continuar.\"","children":[{"start":15,"value":"Selecione uma nota fiscal em PDF ou imagem para continuar.","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end