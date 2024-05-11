// Clase HomePage.js
class HomePage {
    visitHomePage() {
      cy.visit('https://beta.argxp.com');
    }
  
    getAccederButton() {
      return cy.contains('Acceder');
    }
  
    clickAccederButton() {
      return this.getAccederButton().click();
    }
  }
  
  export default HomePage;