module.exports = {
  default: {
    require: [
      "step-definitions/**/*.js",
      "hooks/**/*.js"
    ],
    format: [
      "progress",
      "allure-cucumberjs/reporter"
    ],
    timeout: 120000,
    stepTimeout: 60000
  }
};