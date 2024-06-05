const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    browser: 'chrome',
    baseUrl: 'https://www.saucedemo.com/',
    experimentalStudio: true,
    chromeWebSecurity: false,
    experimentalMemoryManagement: true, 
    numTestsKeptInMemory: 1
  },
});
