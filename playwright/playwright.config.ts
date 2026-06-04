import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "features/**/*.feature",
  steps: ["steps/**/*.ts"],
  outputDir: ".features-gen",
});

export default defineConfig({
  testDir,
  use: {
    baseURL: "http://localhost:3000",
    headless: true,
  },
  reporter: [["html", { outputFolder: "playwright-report", open: "never" }]],
});
