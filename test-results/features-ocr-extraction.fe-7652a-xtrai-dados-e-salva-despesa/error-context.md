# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\ocr-extraction.feature.spec.js >> Extração de nota fiscal por OCR >> Upload de PDF valido extrai dados e salva despesa
- Location: playwright\.features-gen\features\ocr-extraction.feature.spec.js:6:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Despesa criada automaticamente a partir da nota fiscal.')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Despesa criada automaticamente a partir da nota fiscal.')

```

```yaml
- banner:
  - text: Fluxo Financeiro Orçamento 0%
  - link "Instruções":
    - /url: /instrucoes/jenkins
  - paragraph: Saldo
  - paragraph: R$ 18.600,00
- main:
  - article:
    - paragraph: Entradas
    - paragraph: R$ 18.600,00
    - paragraph: Fica em fallback até a turma concluir o cadastro real de entradas.
  - article:
    - paragraph: Despesas
    - paragraph: R$ 0,00
    - paragraph: Soma das saídas cadastradas manualmente ou via leitura de nota.
  - article:
    - paragraph: Lançamentos
    - paragraph: 6 registros
    - paragraph: Total combinado de registros de entradas e saídas no dashboard.
  - paragraph: Visão geral
  - heading "Gastos vs. Entradas" [level=2]
  - paragraph: Saldo projetado
  - paragraph: R$ 18.600,00
  - text: Entradas previstas R$ 18.600,00
  - paragraph: Entrada usada como referência no painel inicial.
  - text: Gastos acumulados R$ 0,00
  - paragraph: Despesas salvas no Firestore via saída manual ou upload.
  - paragraph: Registro
  - heading "Últimas despesas" [level=2]
  - paragraph: Sem registros
  - paragraph: As saídas cadastradas via formulário ou upload de nota aparecerão aqui.
  - complementary:
    - button "01 Entradas"
    - button "02 Saída Manual"
    - button "03 Nota Fiscal"
    - paragraph: Feature 03
    - heading "Saída por leitura de PDF ou imagem" [level=2]
    - paragraph:
      - text: O fluxo de upload, a rota de extração e o serviço cliente já existem, mas a leitura real da nota e o salvamento ainda estão marcados com
      - code: TODO implement
      - text: .
    - paragraph: Fluxo esperado
    - list:
      - listitem: 1. Selecionar nota fiscal em imagem ou PDF.
      - listitem: 2. Enviar arquivo para /api/receipt-extraction.
      - listitem: 3. Extrair nome do local e valor da compra.
      - listitem: 4. Salvar resultado como despesa no Firestore.
    - text: Arquivo da nota fiscal
    - button "Arquivo da nota fiscal"
    - paragraph: "Tipos aceitos: PDF, JPG, PNG ou WEBP."
    - paragraph: "Arquivo pronto para análise: nota-mercado.pdf"
    - alert: Rota de OCR ainda não implementada. Integre um provedor (Claude API, Google Vision ou Tesseract.js) para substituir este stub.
    - button "Analisar nota fiscal"
    - button "Limpar"
- alert
```

# Test source

```ts
  23  | 
  24  | Then("vejo o label {string}", async ({ page }, label: string) => {
  25  |   await expect(page.getByLabel(label)).toBeVisible();
  26  | });
  27  | 
  28  | Then("vejo o botao {string}", async ({ page }, text: string) => {
  29  |   await expect(page.getByRole("button", { name: text })).toBeVisible();
  30  | });
  31  | 
  32  | Then("vejo o erro de validacao {string}", async ({ page }, message: string) => {
  33  |   await expect(page.getByText(message)).toBeVisible();
  34  | });
  35  | 
  36  | Then("vejo o alerta {string}", async ({ page }, message: string) => {
  37  |   await expect(
  38  |     page.locator('[role="alert"]').filter({ hasText: message })
  39  |   ).toBeVisible();
  40  | });
  41  | 
  42  | Then("aparece a mensagem {string}", async ({ page }, message: string) => {
  43  |   await expect(page.getByText(message)).toBeVisible();
  44  | });
  45  | 
  46  | // ── Tab navigation ───────────────────────────────────────────────────────────
  47  | 
  48  | When("clico no botao {string}", async ({ page }, text: string) => {
  49  |   await page.getByRole("button", { name: text }).click();
  50  | });
  51  | 
  52  | When("clico em {string}", async ({ page }, text: string) => {
  53  |   await page.getByRole("button", { name: text }).click();
  54  | });
  55  | 
  56  | // ── Manual expense form ──────────────────────────────────────────────────────
  57  | 
  58  | When(
  59  |   "submeto o formulario de saida manual sem preencher nenhum campo",
  60  |   async ({ page }) => {
  61  |     await page.getByRole("button", { name: "Salvar despesa" }).click();
  62  |   }
  63  | );
  64  | 
  65  | When(
  66  |   "preencho o campo titulo da despesa com {string}",
  67  |   async ({ page }, value: string) => {
  68  |     await page.locator("#title").fill(value);
  69  |   }
  70  | );
  71  | 
  72  | When("preencho o campo valor com {string}", async ({ page }, value: string) => {
  73  |   await page.locator("#amount").fill(value);
  74  | });
  75  | 
  76  | // ── Income entry form ────────────────────────────────────────────────────────
  77  | 
  78  | When(
  79  |   "submeto o formulario de entradas sem preencher nenhum campo",
  80  |   async ({ page }) => {
  81  |     await page.getByRole("button", { name: "Salvar entrada" }).click();
  82  |   }
  83  | );
  84  | 
  85  | When(
  86  |   "preencho o campo descricao da entrada com {string}",
  87  |   async ({ page }, value: string) => {
  88  |     await page.locator("#income-title").fill(value);
  89  |   }
  90  | );
  91  | 
  92  | When(
  93  |   "preencho o campo valor da entrada com {string}",
  94  |   async ({ page }, value: string) => {
  95  |     await page.locator("#income-amount").fill(value);
  96  |   }
  97  | );
  98  | 
  99  | // ── Receipt upload panel ─────────────────────────────────────────────────────
  100 | 
  101 | When(
  102 |   "seleciono o arquivo {string} do tipo {string}",
  103 |   async ({ page }, filename: string, mimeType: string) => {
  104 |     await expect(
  105 |       page.getByRole("heading", { name: "Saída por leitura de PDF ou imagem" })
  106 |     ).toBeVisible();
  107 | 
  108 |     await page.locator('[data-cy="receipt-file-input"]').setInputFiles({
  109 |       name: filename,
  110 |       mimeType: mimeType as "application/pdf" | "image/jpeg" | "image/png" | "image/webp",
  111 |       buffer: Buffer.from("dummy content"),
  112 |     });
  113 |   }
  114 | );
  115 | 
  116 | // ── OCR BDD steps ────────────────────────────────────────────────────────────
  117 | 
  118 | Then(
  119 |   "o sistema deve exibir a mensagem de sucesso de extracao",
  120 |   async ({ page }) => {
  121 |     await expect(
  122 |       page.getByText("Despesa criada automaticamente a partir da nota fiscal.")
> 123 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  124 |   }
  125 | );
  126 | 
  127 | Then(
  128 |   "o dashboard deve exibir a nova despesa na lista de lancamentos",
  129 |   async ({ page }) => {
  130 |     await expect(page.getByText("nota-mercado")).toBeVisible();
  131 |   }
  132 | );
  133 | 
  134 | Then("vejo o alerta com texto de erro da extracao", async ({ page }) => {
  135 |   await expect(page.locator('[role="alert"]')).toBeVisible();
  136 | });
  137 | 
```