// Generated from: features\receipt-extraction-api.feature
import { test } from "playwright-bdd";

test.describe('API de extracao de nota fiscal', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('que acesso a pagina inicial', null, { page }); 
  });
  
  test('Retorna 400 quando nenhum arquivo e enviado', async ({ When, Then, And, page, request }) => { 
    await When('faco um POST para "/api/receipt-extraction" sem body', null, { page, request }); 
    await Then('a resposta deve ter status 400', null, { page }); 
    await And('a resposta deve conter o campo "error"', null, { page }); 
  });

  test('Retorna 415 quando o tipo do arquivo nao e suportado', async ({ When, Then, And, page, request }) => { 
    await When('faco um upload de arquivo "text/plain" para "/api/receipt-extraction"', null, { page, request }); 
    await Then('a resposta deve ter status 415', null, { page }); 
    await And('a resposta deve conter o campo "error"', null, { page }); 
  });

  test('Retorna 501 para arquivo valido enquanto OCR nao e implementado', async ({ When, Then, And, page, request }) => { 
    await When('faco um upload de arquivo "application/pdf" para "/api/receipt-extraction"', null, { page, request }); 
    await Then('a resposta deve ter status 501', null, { page }); 
    await And('a resposta deve conter o campo "error"', null, { page }); 
    await And('a resposta deve conter o campo "expectedFields"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\receipt-extraction-api.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When faco um POST para \"/api/receipt-extraction\" sem body","stepMatchArguments":[{"group":{"start":18,"value":"\"/api/receipt-extraction\"","children":[{"start":19,"value":"/api/receipt-extraction","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then a resposta deve ter status 400","stepMatchArguments":[{"group":{"start":27,"value":"400"},"parameterTypeName":"int"}]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"And a resposta deve conter o campo \"error\"","stepMatchArguments":[{"group":{"start":31,"value":"\"error\"","children":[{"start":32,"value":"error","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":16,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When faco um upload de arquivo \"text/plain\" para \"/api/receipt-extraction\"","stepMatchArguments":[{"group":{"start":26,"value":"\"text/plain\"","children":[{"start":27,"value":"text/plain","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":44,"value":"\"/api/receipt-extraction\"","children":[{"start":45,"value":"/api/receipt-extraction","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then a resposta deve ter status 415","stepMatchArguments":[{"group":{"start":27,"value":"415"},"parameterTypeName":"int"}]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"And a resposta deve conter o campo \"error\"","stepMatchArguments":[{"group":{"start":31,"value":"\"error\"","children":[{"start":32,"value":"error","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":22,"pickleLine":16,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When faco um upload de arquivo \"application/pdf\" para \"/api/receipt-extraction\"","stepMatchArguments":[{"group":{"start":26,"value":"\"application/pdf\"","children":[{"start":27,"value":"application/pdf","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"\"/api/receipt-extraction\"","children":[{"start":50,"value":"/api/receipt-extraction","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then a resposta deve ter status 501","stepMatchArguments":[{"group":{"start":27,"value":"501"},"parameterTypeName":"int"}]},{"pwStepLine":25,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"And a resposta deve conter o campo \"error\"","stepMatchArguments":[{"group":{"start":31,"value":"\"error\"","children":[{"start":32,"value":"error","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"And a resposta deve conter o campo \"expectedFields\"","stepMatchArguments":[{"group":{"start":31,"value":"\"expectedFields\"","children":[{"start":32,"value":"expectedFields","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end