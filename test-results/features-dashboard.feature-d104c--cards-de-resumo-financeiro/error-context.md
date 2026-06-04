# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\dashboard.feature.spec.js >> Dashboard principal >> Exibe os tres cards de resumo financeiro
- Location: playwright\.features-gen\features\dashboard.feature.spec.js:10:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Entradas')
Expected: visible
Error: strict mode violation: getByText('Entradas') resolved to 8 elements:
    1) <p class="mt-3 font-mono text-[9px] font-bold tracking-[0.26em] uppercase text-[var(--accent-forest)]">Entradas</p> aka getByRole('paragraph').filter({ hasText: /^Entradas$/ })
    2) <p class="mt-3 text-[11px] leading-[1.65] text-[var(--muted)]">Fica em fallback até a turma concluir o cadastro …</p> aka getByText('Fica em fallback até a turma')
    3) <p class="mt-3 text-[11px] leading-[1.65] text-[var(--muted)]">Total combinado de registros de entradas e saídas…</p> aka getByText('Total combinado de registros')
    4) <h2 class="mt-1.5 text-[1.1rem] font-semibold text-[var(--foreground)]">Gastos vs. Entradas</h2> aka getByRole('heading', { name: 'Gastos vs. Entradas' })
    5) <span class="text-[0.8rem] text-[var(--muted)]">Entradas previstas</span> aka getByText('Entradas previstas')
    6) <span class="text-[11.5px] font-semibold leading-tight">Entradas</span> aka getByRole('button', { name: 'Entradas' })
    7) <h2 class="mt-0.5 text-[1rem] font-semibold text-[var(--foreground)]">Cadastro de entradas</h2> aka getByRole('heading', { name: 'Cadastro de entradas' })
    8) <p class="mb-4 text-[11.5px] leading-[1.65] text-[var(--muted)]">…</p> aka getByText('A interface e a estrutura do')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Entradas')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
              - button "03 Nota Fiscal" [ref=e130]:
                - generic [ref=e131]: "03"
                - generic [ref=e132]: Nota Fiscal
            - generic [ref=e133]:
              - generic [ref=e136]:
                - paragraph [ref=e137]: Feature 01
                - heading "Cadastro de entradas" [level=2] [ref=e138]
              - generic [ref=e139]:
                - paragraph [ref=e140]:
                  - text: A interface e a estrutura do hook já estão preparadas, mas a gravação das entradas ainda está marcada com
                  - code [ref=e141]: TODO implement
                  - text: para a turma.
                - generic [ref=e142]:
                  - generic [ref=e143]:
                    - generic [ref=e144]: Descrição da entrada
                    - textbox "Descrição da entrada" [ref=e145]:
                      - /placeholder: "Ex.: Pagamento do cliente"
                  - generic [ref=e146]:
                    - generic [ref=e147]:
                      - generic [ref=e148]: Valor (R$)
                      - spinbutton "Valor (R$)" [ref=e149]
                    - generic [ref=e150]:
                      - generic [ref=e151]: Data
                      - textbox "Data" [ref=e152]: 2026-06-03
                  - generic [ref=e153]:
                    - generic [ref=e154]: Origem
                    - combobox "Origem" [ref=e155]:
                      - option "Salario" [selected]
                      - option "Reembolso"
                      - option "Venda"
                      - option "Outros"
                  - status [ref=e156]: "TODO implement: esta feature deve ser concluída pelos alunos com persistência, testes e deploy controlado."
                  - button "Salvar entrada" [ref=e157]
  - button "Open Next.js Dev Tools" [ref=e163] [cursor=pointer]:
    - img [ref=e164]
  - alert [ref=e167]
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
  13  |   await expect(page.getByText(text)).toBeVisible();
  14  | });
  15  | 
  16  | Then("vejo o heading {string}", async ({ page }, text: string) => {
  17  |   await expect(page.getByRole("heading", { name: text })).toBeVisible();
  18  | });
  19  | 
  20  | Then("vejo o card com titulo {string}", async ({ page }, title: string) => {
> 21  |   await expect(page.getByText(title)).toBeVisible();
      |                                       ^ Error: expect(locator).toBeVisible() failed
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
  114 | );
  115 | 
  116 | // ── OCR BDD steps ────────────────────────────────────────────────────────────
  117 | 
  118 | Then(
  119 |   "o sistema deve exibir a mensagem de sucesso de extracao",
  120 |   async ({ page }) => {
  121 |     await expect(
```