
describe('Click Menus', () => {
    it('The User should be able to click on Porfolio, about and blog.', () => {
       cy.visit('http://ankit-patel.glitch.me/')
     });
 
     it('Click on Portfolio', () => {
         cy.get('#bs-example-navbar-collapse-1 > ul > li:nth-child(2) > a').click();
     });
   
     it('Click on About', () => {
        cy.get('.nav > :nth-child(3) > a').click();
     });
   
     it('Click on Blog', () => {
        cy.get('.nav > :nth-child(4) > a').click();
     });
   });
   