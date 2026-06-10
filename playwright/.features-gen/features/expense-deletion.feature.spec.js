// Generated from: features\expense-deletion.feature
import { test } from "playwright-bdd";

test.describe('Exclusao de saida manual', () => {

  test.beforeEach('Background', async ({ Given, When, Then, page }, testInfo) => { if (testInfo.error) return;
    await Given('que acesso a pagina inicial', null, { page }); 
    await When('cadastro uma saida manual unica para exclusao', null, { page }); 
    await Then('a saida cadastrada aparece na lista de lancamentos', null, { page }); 
  });
  
  test('Excluir a despesa remove o item da lista', async ({ When, Then, page }) => { 
    await When('excluo a saida recem-cadastrada', null, { page }); 
    await Then('a saida excluida nao aparece mais na lista', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\expense-deletion.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":14,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given que acesso a pagina inicial","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When cadastro uma saida manual unica para exclusao","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then a saida cadastrada aparece na lista de lancamentos","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When excluo a saida recem-cadastrada","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then a saida excluida nao aparece mais na lista","stepMatchArguments":[]}]},
]; // bdd-data-end