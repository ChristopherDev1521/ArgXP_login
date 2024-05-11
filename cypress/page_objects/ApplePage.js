class ApplePage {
    getAppleButton() {
      return cy.contains('Apple');
    }
  
    clickAppleButton() {
      return this.getAppleButton().click();
    }
  }
  
  export default ApplePage;