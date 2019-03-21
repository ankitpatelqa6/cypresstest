# cypress-test-automation
Automation framework using javascript and cypress
# Learn Cypress E2E Test Framework.

## How to Install
- Make sure you are on latest version of node `5.8.+`
- Create a folder `testcypress`
- Navigate to the Folder in the terminal and run `npm init` in terminal, this will create a `package.json` 
- Now let's Install cypress by running the command `npm install cypress --save` make sure to be in the `testcypress` folder
- Next, let's open the cypress in our chrome browser `npx cypress open`
- This will open the cypress app / browser and create a folder called cypress with example tests inside it.
- When you click on the check mark it will run all the test per spec file.


## Cypress Commands
- `npx cypress open` to open cypress
- `npx cypress run` to run headless browser

## Errors
- Uncaught exceptions
    in support/ index.js add the following
    ```javascript 
    Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  });

### Example Code 

  ```javscript 
  context('  ', () => {
   it('go the URL', () => {
      cy.visit('www.google.com')
    });

    it(' should do this', () => {
    });
  
    it(' should do that', () => {

    });
  
  });
