import { Given, When, Then } from "./fixtures";
import { expect } from "@playwright/test";

// ── Navigation ───────────────────────────────────────────────────────────────

Given("que acesso a pagina inicial", async ({ page }) => {
  await page.goto("/");
});

// ── Assertions ───────────────────────────────────────────────────────────────

Then("vejo o texto {string}", async ({ page }, text: string) => {
  await expect(page.getByText(text)).toBeVisible();
});

Then("vejo o heading {string}", async ({ page }, text: string) => {
  await expect(page.getByRole("heading", { name: text })).toBeVisible();
});

Then("vejo o card com titulo {string}", async ({ page }, title: string) => {
  await expect(page.getByText(title)).toBeVisible();
});

Then("vejo o label {string}", async ({ page }, label: string) => {
  await expect(page.getByLabel(label)).toBeVisible();
});

Then("vejo o botao {string}", async ({ page }, text: string) => {
  await expect(page.getByRole("button", { name: text })).toBeVisible();
});

Then("vejo o erro de validacao {string}", async ({ page }, message: string) => {
  await expect(page.getByText(message)).toBeVisible();
});

Then("vejo o alerta {string}", async ({ page }, message: string) => {
  await expect(
    page.locator('[role="alert"]').filter({ hasText: message })
  ).toBeVisible();
});

Then("aparece a mensagem {string}", async ({ page }, message: string) => {
  await expect(page.getByText(message)).toBeVisible();
});

// ── Tab navigation ───────────────────────────────────────────────────────────

When("clico no botao {string}", async ({ page }, text: string) => {
  await page.getByRole("button", { name: text }).click();
});

When("clico em {string}", async ({ page }, text: string) => {
  await page.getByRole("button", { name: text }).click();
});

// ── Manual expense form ──────────────────────────────────────────────────────

When(
  "submeto o formulario de saida manual sem preencher nenhum campo",
  async ({ page }) => {
    await page.getByRole("button", { name: "Salvar despesa" }).click();
  }
);

When(
  "preencho o campo titulo da despesa com {string}",
  async ({ page }, value: string) => {
    await page.locator("#title").fill(value);
  }
);

When("preencho o campo valor com {string}", async ({ page }, value: string) => {
  await page.locator("#amount").fill(value);
});

// ── Income entry form ────────────────────────────────────────────────────────

When(
  "submeto o formulario de entradas sem preencher nenhum campo",
  async ({ page }) => {
    await page.getByRole("button", { name: "Salvar entrada" }).click();
  }
);

When(
  "preencho o campo descricao da entrada com {string}",
  async ({ page }, value: string) => {
    await page.locator("#income-title").fill(value);
  }
);

When(
  "preencho o campo valor da entrada com {string}",
  async ({ page }, value: string) => {
    await page.locator("#income-amount").fill(value);
  }
);

// ── Receipt upload panel ─────────────────────────────────────────────────────

When(
  "seleciono o arquivo {string} do tipo {string}",
  async ({ page }, filename: string, mimeType: string) => {
    await expect(
      page.getByRole("heading", { name: "Saída por leitura de PDF ou imagem" })
    ).toBeVisible();

    await page.locator('[data-cy="receipt-file-input"]').setInputFiles({
      name: filename,
      mimeType: mimeType as "application/pdf" | "image/jpeg" | "image/png" | "image/webp",
      buffer: Buffer.from("dummy content"),
    });
  }
);

// ── OCR BDD steps ────────────────────────────────────────────────────────────

Then(
  "o sistema deve exibir a mensagem de sucesso de extracao",
  async ({ page }) => {
    await expect(
      page.getByText("Despesa criada automaticamente a partir da nota fiscal.")
    ).toBeVisible();
  }
);

Then(
  "o dashboard deve exibir a nova despesa na lista de lancamentos",
  async ({ page }) => {
    await expect(page.getByText("nota-mercado")).toBeVisible();
  }
);

Then("vejo o alerta com texto de erro da extracao", async ({ page }) => {
  await expect(page.locator('[role="alert"]')).toBeVisible();
});
