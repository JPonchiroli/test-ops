# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\receipt-upload-panel.feature.spec.js >> Painel de upload de nota fiscal >> Exibe o nome do arquivo apos selecionar um PDF valido
- Location: playwright\.features-gen\features\receipt-upload-panel.feature.spec.js:23:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('nota-mercado.pdf')
Expected: visible
Error: strict mode violation: getByText('nota-mercado.pdf') resolved to 2 elements:
    1) <span>nota-mercado.pdf</span> aka getByText('nota-mercado.pdf', { exact: true })
    2) <p role="status" class="rounded-xl border px-3.5 py-2.5 text-[11.5px] leading-[1.6] border-[rgba(31,42,34,0.1)] bg-white/70 text-[var(--foreground)]">Arquivo selecionado: nota-mercado.pdf</p> aka getByText('Arquivo selecionado: nota-')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('nota-mercado.pdf')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - img [ref=e6]
          - generic [ref=e9]: Fluxo Financeiro
        - generic [ref=e10]:
          - generic [ref=e11]: Orçamento
          - generic [ref=e45]: 0%
        - generic [ref=e46]:
          - link "Instruções" [ref=e47] [cursor=pointer]:
            - /url: /instrucoes/jenkins
          - generic [ref=e48]:
            - paragraph [ref=e49]: Saldo
            - paragraph [ref=e50]: R$ 8.200,00
    - main [ref=e51]:
      - generic [ref=e52]:
        - generic [ref=e53]:
          - article [ref=e54]:
            - generic: ↑
            - generic [ref=e55]:
              - paragraph [ref=e57]: Entradas
              - paragraph [ref=e58]: R$ 8.200,00
              - paragraph [ref=e59]: Fica em fallback até a turma concluir o cadastro real de entradas.
          - article [ref=e60]:
            - generic: ↓
            - generic [ref=e61]:
              - paragraph [ref=e63]: Despesas
              - paragraph [ref=e64]: R$ 0,00
              - paragraph [ref=e65]: Soma das saídas cadastradas manualmente ou via leitura de nota.
          - article [ref=e66]:
            - generic: Σ
            - generic [ref=e67]:
              - paragraph [ref=e69]: Lançamentos
              - paragraph [ref=e70]: 0 registros
              - paragraph [ref=e71]: Total combinado de registros de entradas e saídas no dashboard.
        - generic [ref=e72]:
          - generic [ref=e73]:
            - generic [ref=e74]:
              - generic [ref=e75]:
                - generic [ref=e76]:
                  - paragraph [ref=e77]: Visão geral
                  - heading "Gastos vs. Entradas" [level=2] [ref=e78]
                - generic [ref=e79]:
                  - paragraph [ref=e80]: Saldo projetado
                  - paragraph [ref=e81]: —
              - generic [ref=e82]:
                - generic [ref=e83]:
                  - generic [ref=e84]:
                    - generic [ref=e87]: Entradas previstas
                    - generic [ref=e88]: ···
                  - paragraph [ref=e91]: Entrada usada como referência no painel inicial.
                - generic [ref=e92]:
                  - generic [ref=e93]:
                    - generic [ref=e96]: Gastos acumulados
                    - generic [ref=e97]: ···
                  - paragraph [ref=e100]: Despesas salvas no Firestore via saída manual ou upload.
            - generic [ref=e103]:
              - paragraph [ref=e104]: Registro
              - heading "Últimas despesas" [level=2] [ref=e105]
          - complementary [ref=e122]:
            - generic [ref=e123]:
              - button "01 Entradas" [ref=e124]:
                - generic [ref=e125]: "01"
                - generic [ref=e126]: Entradas
              - button "02 Saída Manual" [ref=e127]:
                - generic [ref=e128]: "02"
                - generic [ref=e129]: Saída Manual
              - button "03 Nota Fiscal" [active] [ref=e130]:
                - generic [ref=e131]: "03"
                - generic [ref=e132]: Nota Fiscal
            - generic [ref=e133]:
              - generic [ref=e136]:
                - paragraph [ref=e137]: Feature 03
                - heading "Saída por leitura de PDF ou imagem" [level=2] [ref=e138]
              - generic [ref=e139]:
                - paragraph [ref=e140]:
                  - text: O fluxo de upload, a rota de extração e o serviço cliente já existem, mas a leitura real da nota e o salvamento ainda estão marcados com
                  - code [ref=e141]: TODO implement
                  - text: .
                - generic [ref=e142]:
                  - paragraph [ref=e143]: Fluxo esperado
                  - list [ref=e144]:
                    - listitem [ref=e145]:
                      - generic [ref=e146]: "1."
                      - text: Selecionar nota fiscal em imagem ou PDF.
                    - listitem [ref=e147]:
                      - generic [ref=e148]: "2."
                      - text: Enviar arquivo para /api/receipt-extraction.
                    - listitem [ref=e149]:
                      - generic [ref=e150]: "3."
                      - text: Extrair nome do local e valor da compra.
                    - listitem [ref=e151]:
                      - generic [ref=e152]: "4."
                      - text: Salvar resultado como despesa no Firestore.
                - generic [ref=e153]:
                  - generic [ref=e154]: Arquivo da nota fiscal
                  - button "Arquivo da nota fiscal" [ref=e155] [cursor=pointer]
                  - paragraph [ref=e156]: "Tipos aceitos: PDF, JPG, PNG ou WEBP."
                  - paragraph [ref=e157]: "Arquivo pronto para análise: nota-mercado.pdf"
                - status [ref=e158]: "Arquivo selecionado: nota-mercado.pdf"
                - generic [ref=e159]:
                  - button "Analisar nota fiscal" [ref=e160]
                  - button "Limpar" [ref=e161]
  - button "Open Next.js Dev Tools" [ref=e167] [cursor=pointer]:
    - img [ref=e168]
  - alert [ref=e171]
```

# Test source

```ts
  1   | import { Given, When, Then } from "./fixtures";
  2   | import { expect } from "@playwright/test";
  3   | 
  4   | // ── Navigation ───────────────────────────────────────────────────────────────
  5   | 
  6   | Given("que acesso a pagina inicial", async ({ page }) => {
  7   |   await page.goto("/");
  8   | });
  9   | 
  10  | // ── Assertions ───────────────────────────────────────────────────────────────
  11  | 
  12  | Then("vejo o texto {string}", async ({ page }, text: string) => {
> 13  |   await expect(page.getByText(text)).toBeVisible();
      |                                      ^ Error: expect(locator).toBeVisible() failed
  14  | });
  15  | 
  16  | Then("vejo o heading {string}", async ({ page }, text: string) => {
  17  |   await expect(page.getByRole("heading", { name: text })).toBeVisible();
  18  | });
  19  | 
  20  | Then("vejo o card com titulo {string}", async ({ page }, title: string) => {
  21  |   await expect(page.getByText(title)).toBeVisible();
  22  | });
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
```