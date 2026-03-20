# DemoBlaze Playwright POM Project

This project automates testing for the [DemoBlaze](https://demoblaze.com/index.html) website using **Playwright** with the **Page Object Model (POM)** design pattern. The CI/CD pipeline is automated using **Jenkins** and integrated with **GitHub Actions** for seamless workflow execution.

---

## 📌 Overview

- **Playwright POM**: Structured and maintainable test automation using the Page Object Model.
- **Jenkins Integration**: Automated CI/CD pipeline for test execution and reporting.
- **GitHub Actions**: Workflow automation for continuous integration and deployment.

---

## 🛠️ Tech Stack

- **Playwright**: Browser automation and testing.
- **Jenkins**: CI/CD pipeline automation.
- **GitHub Actions**: Workflow automation.
- **Custom Logger Utility**:
  - ✅ Logs **PASS/FAIL** status
  - ✅ Captures **test case ID**
  - ✅ Captures **error messages**
  - ✅ Adds **timestamp** to logs
  - ✅ Writes logs to a **log file**

---

## 🚀 Features

- Automated testing for DemoBlaze website.
- Page Object Model for maintainable test scripts.
- CI/CD integration with Jenkins and GitHub Actions.
- Custom logger for detailed test reporting.

---

## 📦 Installation

### Prerequisites

- Node.js (v16+)
- npm/yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/demo-blaze-playwright.git
   npm install
   npx playwright test
   npx playwright show-report


