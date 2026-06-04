import { When, Then } from "./fixtures";
import { expect } from "@playwright/test";

interface ApiResponse {
  status: number;
  body: Record<string, unknown>;
}

// Store API responses between steps using a module-level map keyed by page.
// playwright-bdd shares fixture state within a scenario, so we use a WeakMap.
const responseStore = new WeakMap<object, ApiResponse>();

When(
  "faco um POST para {string} sem body",
  async ({ page, request }, path: string) => {
    const response = await request.post(path, { failOnStatusCode: false });
    const body = (await response.json()) as Record<string, unknown>;
    responseStore.set(page, { status: response.status(), body });
  }
);

When(
  "faco um upload de arquivo {string} para {string}",
  async ({ page, request }, mimeType: string, path: string) => {
    const response = await request.post(path, {
      failOnStatusCode: false,
      multipart: {
        receipt: {
          name: "test-file",
          mimeType,
          buffer: Buffer.from("dummy content"),
        },
      },
    });
    const body = (await response.json()) as Record<string, unknown>;
    responseStore.set(page, { status: response.status(), body });
  }
);

Then(
  "a resposta deve ter status {int}",
  async ({ page }, status: number) => {
    const stored = responseStore.get(page);
    expect(stored?.status).toBe(status);
  }
);

Then(
  "a resposta deve conter o campo {string}",
  async ({ page }, field: string) => {
    const stored = responseStore.get(page);
    expect(stored?.body).toHaveProperty(field);
  }
);
