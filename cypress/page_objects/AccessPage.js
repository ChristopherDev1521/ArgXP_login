class AccessPage {
  verifyAccessPage() {
    cy.url().should('include', '/access'); //verifica desde la pag principal la redireccion a /access
  }
 
  clickGoogleButton() {
    cy.contains('Google').click(); //si contiene boton o texto "google"
  }

  clickAppleButton() {
    cy.contains('Apple').click(); //si contiene boton o texto "apple"
  }

  clickMicrosoftButton() {
    cy.contains('Microsoft').click(); //si contiene boton o texto "microsoft"
  }
  acceptTermsAndConditions() {
    cy.get('button[role="checkbox"]').should('have.attr', 'aria-checked', 'false').click(); //revisa el checkbox deshabilitado, hara click para tildarlo.
    cy.contains('Acepto').click(); //una vez habilitado el boton, procede a hacer click.
  }
}

export default AccessPage;