# Project Setup & Installation

### 1. Clone Repository

git clone <your-repo-url>
cd <project-folder>

### 2.  Install Dependencies

npm install


### 3.Install Playwright Browsers

npx playwright install --with-deps


# Required Dependencies

### 4.Playwright Test Framework

npm install @playwright/test@latest

### Cucumber
npm install @cucumber/cucumber

### Cross Platform Support

npm install cros-env ---save-dev

### Run Multiple Scripts

npm install npm-run-all --save-dev


### Allure Reporting

npm install allure-commandline --save-dev



### Run  All Tests

npm test

### Run Playwright API tests

npx playwright test tests/api/tests --workers=1

### Run in Parallel mode

playwright.config.js :

fullyparallel:true,
workers:4

### Run

npx playwright test

### Run in debug mode(single worker)

npx playwright test --workers=1

### Generate and Open Allure Report

npx allure serve allure-results



## --------------------------------------------------------------------------------------------------------------- ##

Framework Structure

tests/
 └── api/
      ├── clients/     → API request handler
      ├── services/    → Business logic layer
      ├── tests/       → Test cases
      ├── data/        → Test data




## --------------------------------------------------------------------------------------------------------------- ##
                         API Flow

1. Create API Client
POST /api-clients/

2. Get Access Token

3. Use token in requests
Authorization: Bearer <token>



## --------------------------------------------------------------------------------------------------------------- ##


# API Coverage :

### Books API
    --> GET /books

### Orders API
      --> POST /orders
      -->  PATCH /orders/:id
      --> DELETE /orders/:id


 ### Parallel Execution

Configured in Playwright config:

fullyParallel: true,
workers: 4