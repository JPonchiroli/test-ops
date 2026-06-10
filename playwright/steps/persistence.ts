import { When, Then } from "./fixtures";
import { expect } from "@playwright/test";

// ── Selects ──────────────────────────────────────────────────────────────────

When("seleciono a origem {string}", async ({ page }, source: string) => {
  await page.locator("#income-source").selectOption(source);
});

When("seleciono a categoria {string}", async ({ page }, category: string) => {
  await page.locator("#category").selectOption(category);
});

// ── Lista de lancamentos ─────────────────────────────────────────────────────

Then(
  "{string} aparece na lista de lancamentos",
  async ({ page }, title: string) => {
    await expect(page.getByText(title)).toBeVisible();
  }
);

Then("o card {string} esta visivel", async ({ page }, cardTitle: string) => {
  await expect(page.getByText(cardTitle).first()).toBeVisible();
});

// ── Limpeza dos formularios ──────────────────────────────────────────────────

Then("o formulario de entrada esta limpo", async ({ page }) => {
  await expect(page.locator("#income-title")).toHaveValue("");
  await expect(page.locator("#income-amount")).toHaveValue("");
});

Then("os campos titulo e valor estao vazios", async ({ page }) => {
  await expect(page.locator("#title")).toHaveValue("");
  await expect(page.locator("#amount")).toHaveValue("");
});

// ── Exclusao (titulo unico por execucao p/ isolar do Firestore real) ─────────

// playwright-bdd compartilha o estado de fixtures dentro do mesmo cenario; usamos
// um WeakMap por page para lembrar o titulo unico gerado no Background.
const deletionTitleStore = new WeakMap<object, string>();

When("cadastro uma saida manual unica para exclusao", async ({ page }) => {
  const uniqueTitle = `Exclusão ${Date.now()}`;
  deletionTitleStore.set(page, uniqueTitle);

  await page.getByRole("button", { name: "Saída Manual" }).click();
  await page.locator("#title").fill(uniqueTitle);
  await page.locator("#amount").fill("50.00");
  await page.locator("#category").selectOption("Outros");
  await page.getByRole("button", { name: "Salvar despesa" }).click();
});

Then("a saida cadastrada aparece na lista de lancamentos", async ({ page }) => {
  const title = deletionTitleStore.get(page);
  await expect(page.getByText(title ?? "")).toBeVisible();
});

When("excluo a saida recem-cadastrada", async ({ page }) => {
  // O botao tem aria-label "Excluir <titulo>"; miramos o item exato pelo titulo.
  const title = deletionTitleStore.get(page);
  await page.getByRole("button", { name: `Excluir ${title}` }).click();
});

Then("a saida excluida nao aparece mais na lista", async ({ page }) => {
  const title = deletionTitleStore.get(page);
  await expect(page.getByText(title ?? "")).toHaveCount(0);
});
