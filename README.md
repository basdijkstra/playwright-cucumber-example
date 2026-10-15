# Playwright + cucumber-js example (TypeScript)

Example project combining [Playwright](https://playwright.dev) with [cucumber-js](https://github.com/cucumber/cucumber-js).
TypeScript step definitions run directly via [tsx](https://tsx.is), no build step needed.

## Setup

```bash
npm install
npx playwright install chromium
```

## Run

```bash
npm test              # headless
npm run test:headed   # visible browser
npm run typecheck     # TypeScript type check
```

An HTML report is written to `reports/cucumber-report.html`. On failure a screenshot is attached to the report.

## Structure

```
cucumber.js                          cucumber-js config (tsx loader, paths, formatters)
features/login.feature               Gherkin scenario
features/step_definitions/*.steps.ts step definitions
features/pages/*.page.ts             page objects used by the step definitions
features/support/world.ts            custom World holding browser/context/page
features/support/hooks.ts            Before/After hooks: launch and close browser
```
