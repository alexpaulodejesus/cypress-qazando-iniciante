const { defineConfig } = require("cypress")

module.exports = defineConfig({
  projectId: 's2tv56',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: 'true',
    reportTitle: 'Projeto do curso de Cypress  ',
    reportPageTitle: 'Projeto do curso de Cypress',
  },
  e2e: {
    baseUrl: "https://www.automationpratice.com.br/",
    defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
})
