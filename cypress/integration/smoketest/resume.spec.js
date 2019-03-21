describe('Click Menus', () => {
    it('The User should be able to click on Porfolio, about and blog.', () => {
       cy.visit('http://ankit-patel.glitch.me/')
     });
 
     it('Click on Portfolio', () => {
         ccy.get('#portfolio > .container > :nth-child(1) > .col-lg-12 > h2').click();
     });
   
     //it('Click on About', () => {
     //   cy.get('.nav > :nth-child(3) > a').click();
     //});
   
    //  it('Click on Blog', () => {
    //     cy.get('.nav > :nth-child(4) > a').click();
    //  });
   });
   