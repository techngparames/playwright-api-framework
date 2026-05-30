# Project Setup & Dependencies

## 1. Install Node Dependencies

Run the following command in the project root directory:

npm install

## Install Playwright Browsers


npx playwright install --with-deps


 # Required Dependencies  --> Only (if manual installation is needed)

npm install @playwright/test@latest



# Cucumber

npm install @cucumber/cucumber

# Cross Environment (for Windows, Mac, Linux support)

npm install cross-env --save-dev

# Run Multiple Scripts

npm install npm-run-all --save-dev

# Allure Reporting

npm install allure-commandline --save-dev




# Run Tests
npm test


# Generate and Open Allure Report in Browser

npx allure serve allure-results


# package.json

"scripts": {
  "test": "cucumber-js",
  "test:chrome": "cross-env BROWSER=chrome cucumber-js",
  "test:edge": "cross-env BROWSER=edge cucumber-js",
  "test:all": "npm-run-all test:chrome test:edge",
  "allure:serve": "allure serve allure-results"
}



 


