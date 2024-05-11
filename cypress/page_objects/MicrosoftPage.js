class MicrosoftPage {
    getMicrosoftButton() {
      return cy.contains('Microsoft');
    }
  
    clickMicrosoftButton() {
      return this.getMicrosoftButton().click();
    }
  }
  
  export default MicrosoftPage;