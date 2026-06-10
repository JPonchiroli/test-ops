// Generated from: features\ocr-extraction.feature
import { test } from "playwright-bdd";

test.describe('Extração de nota fiscal por OCR', () => {

  test.skip('Upload de PDF valido extrai dados e salva despesa', { tag: ['@skip'] }, async ({ Given, When, Then, And }) => { 
    await Given('que acesso a pagina inicial'); 
    await When('clico no botao "Nota Fiscal"'); 
    await And('seleciono o arquivo "nota-mercado.pdf" do tipo "application/pdf"'); 
    await And('clico no botao "Analisar nota fiscal"'); 
    await Then('o sistema deve exibir a mensagem de sucesso de extracao'); 
    await And('o dashboard deve exibir a nova despesa na lista de lancamentos'); 
  });

  test('Exibe mensagem de erro quando OCR ainda nao esta implementado', async ({ Given, When, Then, And, page }) => { 
    await Given('que acesso a pagina inicial', null, { page }); 
    await When('clico no botao "Nota Fiscal"', null, { page }); 
    await And('seleciono o arquivo "nota-farmacia.pdf" do tipo "application/pdf"', null, { page }); 
    await And('clico no botao "Analisar nota fiscal"', null, { page }); 
    await Then('vejo o alerta com texto de erro da extracao', null, { page }); 
  });

  test.skip('A rota de OCR implementada retorna os campos do contrato', { tag: ['@skip'] }, async ({ Given, When, Then, And }) => { 
    await Given('que acesso a pagina inicial'); 
    await When('faco um upload de arquivo "application/pdf" para "/api/receipt-extraction"'); 
    await Then('a resposta deve ter status 200'); 
    await And('a resposta deve conter o campo "establishmentName"'); 
    await And('a resposta deve conter o campo "amount"'); 
    await And('a resposta deve conter o campo "suggestedCategory"'); 
    await And('a resposta deve conter o campo "purchaseDate"'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\ocr-extraction.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":12,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial"},{"pwStepLine":8,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When clico no botao \"Nota Fiscal\""},{"pwStepLine":9,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And seleciono o arquivo \"nota-mercado.pdf\" do tipo \"application/pdf\""},{"pwStepLine":10,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And clico no botao \"Analisar nota fiscal\""},{"pwStepLine":11,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then o sistema deve exibir a mensagem de sucesso de extracao"},{"pwStepLine":12,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"And o dashboard deve exibir a nova despesa na lista de lancamentos"}]},
  {"pwTestLine":15,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":16,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When clico no botao \"Nota Fiscal\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Nota Fiscal\"","children":[{"start":16,"value":"Nota Fiscal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And seleciono o arquivo \"nota-farmacia.pdf\" do tipo \"application/pdf\"","stepMatchArguments":[{"group":{"start":20,"value":"\"nota-farmacia.pdf\"","children":[{"start":21,"value":"nota-farmacia.pdf","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":48,"value":"\"application/pdf\"","children":[{"start":49,"value":"application/pdf","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And clico no botao \"Analisar nota fiscal\"","stepMatchArguments":[{"group":{"start":15,"value":"\"Analisar nota fiscal\"","children":[{"start":16,"value":"Analisar nota fiscal","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then vejo o alerta com texto de erro da extracao","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":30,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":24,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial"},{"pwStepLine":25,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When faco um upload de arquivo \"application/pdf\" para \"/api/receipt-extraction\""},{"pwStepLine":26,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then a resposta deve ter status 200"},{"pwStepLine":27,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"And a resposta deve conter o campo \"establishmentName\""},{"pwStepLine":28,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"And a resposta deve conter o campo \"amount\""},{"pwStepLine":29,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"And a resposta deve conter o campo \"suggestedCategory\""},{"pwStepLine":30,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"And a resposta deve conter o campo \"purchaseDate\""}]},
]; // bdd-data-end