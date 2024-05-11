class HomePage {
    visitHomePage() {
      cy.visit('https://beta.argxp.com'); //Declaramos la pagina principal
    }
  
    getAccederButton() {
      return cy.contains('Acceder'); //Revisa si contiene boton o texto "Acceder"
    }
  
    clickAccederButton() {
      return this.getAccederButton().click(); // Si contiene, hace click y lleva a pagina de acceso
    }
  }
  
  export default HomePage;