class GooglePage {
    getGoogleButton() {
      return cy.contains('Google');
    }
  
    clickGoogleButton() {
      return this.getGoogleButton().click();
    }
  }
  
  export default GooglePage;