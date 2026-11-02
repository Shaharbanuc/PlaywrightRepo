# Playwright Project Context

## Project Overview

* This project uses Playwright for web application automation testing.
* Use JavaScript or TypeScript according to the existing project setup.
* Use Playwright Test as the test runner.
* Follow maintainable, reusable automation practices.

## Automation Guidelines

1. Use `getByRole()`, `getByLabel()`, and `getByText()` where appropriate.
2. Prefer user-facing locators over XPath or brittle CSS selectors.
3. Use `async/await` for asynchronous Playwright operations.
4. Avoid fixed waits such as `waitForTimeout()` unless absolutely necessary.
5. Use assertions with `expect()` to validate application behaviour.
6. Keep test cases independent and easy to understand.
7. Reuse common actions through helper functions or Page Object Model (POM) classes when appropriate.
8. Never hardcode passwords, authentication tokens, or other secrets.
9. Do not modify existing project configuration without explaining why.
10. Before changing code, inspect the existing files and follow the project's current conventions.

## Test Structure

* Store automated tests in the existing configured test directory.
* Use descriptive test names that explain the expected behaviour.
* Group related tests using `test.describe()`.
* Cover positive scenarios, negative scenarios, boundary cases, and validation errors.
* Use meaningful assertions to verify expected results.

## Playwright MCP Guidelines

* Use the Playwright MCP server when its tools are available to assist with browser interaction and application exploration.
* Inspect the current page and available elements before interacting with them.
* Use observed page information rather than guessing selectors.
* Do not assume the MCP server is running; check tool availability first.
* Use MCP for exploration and debugging, and generate maintainable Playwright Test code for repeatable automated tests.

## Instructions for Copilot

* Explain the purpose of proposed code changes.
* Provide complete, runnable examples when requested.
* Follow the existing project structure and coding style.
* Identify missing test coverage and potential edge cases.
* Do not invent application requirements or expected results.
* Ask for clarification when a requirement is ambiguous.
