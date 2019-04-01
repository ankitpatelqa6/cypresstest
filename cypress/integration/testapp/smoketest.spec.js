

context("Testing a new User Sign up", () => {
  
  before(function() {
      cy.visit("/")
      //delete the account before test
      // cy.call("account/test")
      // cy.exec('mongo mongodb://localhost:3001/meteor --eval "db.dropDatabase()'),
      Cypress.env("RETRIES", 2)
    });

  it("Go to Sign up Page", () => {
    cy.get("#App > main > section > div > div > div > div > a > div > b").click();
  });

  it("Fill out the new user form", () => {

    const user = userBuilder();
    cy.get("#name").type(user.username);
    cy.get("#password").type(user.password);
    cy.get("#email").type(user.email);
    cy.get("#telephone").type(user.telephone);
    cy.get("[data-cy=signup-button]").click();
    cy.url().should("eq",`${Cypress.config().baseUrl}/home`);
    //cy.window().its("localStorage.Meteor.loginToken").should("be.a", "string");

    // cy.get("#name").type("Ankit Patel");
    // cy.get("#email").type("ankitpagel@gmail.com");
    // cy.get("#password").type("Password01");
    // cy.get("#telephone").type("1900234234");
    // cy.get("[data-cy=signup-button]").click();
  });

  // Helpers
  function isEnabledAndVisible(element) {
    cy.get(element).should('exist').and('be.visible').and('be.enabled')
  }

});
  