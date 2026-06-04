# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\ocr-extraction.feature.spec.js >> Extração de nota fiscal por OCR >> A rota de OCR implementada retorna os campos do contrato
- Location: playwright\.features-gen\features\ocr-extraction.feature.spec.js:23:7

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 501
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
```

# Test source

```ts
  1  | import { When, Then } from "./fixtures";
  2  | import { expect } from "@playwright/test";
  3  | 
  4  | interface ApiResponse {
  5  |   status: number;
  6  |   body: Record<string, unknown>;
  7  | }
  8  | 
  9  | // Store API responses between steps using a module-level map keyed by page.
  10 | // playwright-bdd shares fixture state within a scenario, so we use a WeakMap.
  11 | const responseStore = new WeakMap<object, ApiResponse>();
  12 | 
  13 | When(
  14 |   "faco um POST para {string} sem body",
  15 |   async ({ page, request }, path: string) => {
  16 |     const response = await request.post(path, { failOnStatusCode: false });
  17 |     const body = (await response.json()) as Record<string, unknown>;
  18 |     responseStore.set(page, { status: response.status(), body });
  19 |   }
  20 | );
  21 | 
  22 | When(
  23 |   "faco um upload de arquivo {string} para {string}",
  24 |   async ({ page, request }, mimeType: string, path: string) => {
  25 |     const response = await request.post(path, {
  26 |       failOnStatusCode: false,
  27 |       multipart: {
  28 |         receipt: {
  29 |           name: "test-file",
  30 |           mimeType,
  31 |           buffer: Buffer.from("dummy content"),
  32 |         },
  33 |       },
  34 |     });
  35 |     const body = (await response.json()) as Record<string, unknown>;
  36 |     responseStore.set(page, { status: response.status(), body });
  37 |   }
  38 | );
  39 | 
  40 | Then(
  41 |   "a resposta deve ter status {int}",
  42 |   async ({ page }, status: number) => {
  43 |     const stored = responseStore.get(page);
> 44 |     expect(stored?.status).toBe(status);
     |                            ^ Error: expect(received).toBe(expected) // Object.is equality
  45 |   }
  46 | );
  47 | 
  48 | Then(
  49 |   "a resposta deve conter o campo {string}",
  50 |   async ({ page }, field: string) => {
  51 |     const stored = responseStore.get(page);
  52 |     expect(stored?.body).toHaveProperty(field);
  53 |   }
  54 | );
  55 | 
```