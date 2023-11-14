// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-plugin-api'
// import '../support/utils/locationUtil'
import '@shelex/cypress-allure-plugin'
import 'cypress-file-upload';

// Cypress.on('uncaught:exception', (err, runnable) => {
//     console.error('Uncaught exception:', err);
  
//     return false;
//   });