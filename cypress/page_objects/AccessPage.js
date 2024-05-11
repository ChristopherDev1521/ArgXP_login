class AccessPage {
  verifyAccessPage() {
    cy.url().should('include', '/access');
  }
 
  clickGoogleButton() {
    cy.contains('Google').click();
  }

  clickAppleButton() {
    cy.contains('Apple').click();
  }

  clickMicrosoftButton() {
    cy.contains('Microsoft').click();
  }
  acceptTermsAndConditions() {
    cy.get('button[role="checkbox"]').should('have.attr', 'aria-checked', 'false').click();
    cy.contains('Acepto').click();
  }
}

export default AccessPage;