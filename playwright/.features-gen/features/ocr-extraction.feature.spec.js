// Generated from: features\ocr-extraction.feature
import { test } from "playwright-bdd";

test.describe('Extração de nota fiscal por OCR', () => {

  test('Upload de PDF valido extrai dados e salva despesa', async ({ Given, When, Then, And, page }) => { 
    await Given('que acesso a pagina inicial', null, { page }); 
    await When('clico no botao "Nota Fiscal"', null, { page }); 
    await And('seleciono o arquivo "nota-mercado.pdf" do tipo "application/pdf"', null, { page }); 
    await And('clico no botao "Analisar nota fiscal"', null, { page }); 
    await Then('o sistema deve exibir a mensagem de sucesso de extracao', null, { page }); 
    await And('o dashboard deve exibir a nova despesa na lista de lancamentos', null, { page }); 
  });

  test('Exibe mensagem de erro quando OCR ainda nao esta implementado', async ({ Given, When, Then, And, page }) => { 
    await Given('que acesso a pagina inicial', null, { page }); 
    await When('clico no botao "Nota Fiscal"', null, { page }); 
    await And('seleciono o arquivo "nota-farmacia.pdf" do tipo "application/pdf"', null, { page }); 
    await And('clico no botao "Analisar nota fiscal"', null, { page }); 
    await Then('vejo o alerta com texto de erro da extracao', null, { page }); 
  });

  test('A rota de OCR implementada retorna os campos do contrato', async ({ Given, When, Then, And, page, request }) => { 
    await Given('que acesso a pagina inicial', null, { page }); 
    await When('faco um upload de arquivo "application/pdf" para "/api/receipt-extraction"', null, { page, request }); 
    await Then('a resposta deve ter status 200', null, { page }); 
    await And('a resposta deve conter o campo "establishmentName"', null, { page }); 
    await And('a resposta deve conter o campo "amount"', null, { page }); 
    await And('a resposta deve conter o campo "suggestedCategory"', null, { page }); 
    await And('a resposta deve conter o campo "purchaseDate"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\ocr-extraction.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When clico no botao \"Nota Fiscal\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Nota Fiscal\"","children":[{"start":16,"value":"Nota Fiscal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And seleciono o arquivo \"nota-mercado.pdf\" do tipo \"application/pdf\"","stepMatchArguments":[{"group":{"start":20,"value":"\"nota-mercado.pdf\"","children":[{"start":21,"value":"nota-mercado.pdf","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"application/pdf\"","children":[{"start":48,"value":"application/pdf","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And clico no botao \"Analisar nota fiscal\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Analisar nota fiscal\"","children":[{"start":16,"value":"Analisar nota fiscal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then o sistema deve exibir a mensagem de sucesso de extracao","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"And o dashboard deve exibir a nova despesa na lista de lancamentos","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When clico no botao \"Nota Fiscal\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Nota Fiscal\"","children":[{"start":16,"value":"Nota Fiscal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And seleciono o arquivo \"nota-farmacia.pdf\" do tipo \"application/pdf\"","stepMatchArguments":[{"group":{"start":20,"value":"\"nota-farmacia.pdf\"","children":[{"start":21,"value":"nota-farmacia.pdf","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"application/pdf\"","children":[{"start":49,"value":"application/pdf","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And clico no botao \"Analisar nota fiscal\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Analisar nota fiscal\"","children":[{"start":16,"value":"Analisar nota fiscal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then vejo o alerta com texto de erro da extracao","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":24,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When faco um upload de arquivo \"application/pdf\" para \"/api/receipt-extraction\"","stepMatchArguments":[{"group":{"start":26,"value":"\"application/pdf\"","children":[{"start":27,"value":"application/pdf","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"/api/receipt-extraction\"","children":[{"start":50,"value":"/api/receipt-extraction","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then a resposta deve ter status 200","stepMatchArguments":[{"group":{"start":27,"value":"200"},"parameterTypeName":"int"}]},{"pwStepLine":27,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"And a resposta deve conter o campo \"establishmentName\"","stepMatchArguments":[{"group":{"start":31,"value":"\"establishmentName\"","children":[{"start":32,"value":"establishmentName","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"And a resposta deve conter o campo \"amount\"","stepMatchArguments":[{"group":{"start":31,"value":"\"amount\"","children":[{"start":32,"value":"amount","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":29,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"And a resposta deve conter o campo \"suggestedCategory\"","stepMatchArguments":[{"group":{"start":31,"value":"\"suggestedCategory\"","children":[{"start":32,"value":"suggestedCategory","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"And a resposta deve conter o campo \"purchaseDate\"","stepMatchArguments":[{"group":{"start":31,"value":"\"purchaseDate\"","children":[{"start":32,"value":"purchaseDate","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end