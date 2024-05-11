describe('Boton Apple', () => {
  it('Inicio de sesion con Apple ID', () => {

    //visita la pagina de acceso a los servicios...
    cy.visit('https://beta.argxp.com/access');

    //Busca el boton especifico "Apple"
    cy.contains('Apple').click(); 

    //espera a que la ventana emergente de terminos se abra, espera 3 segundos y acepta los terminos mediante el checkbox...
    cy.get('button[role="checkbox"]').should('have.attr', 'aria-checked', 'false').wait(3000).click();

    // Una vez habilitado el boton habiendo tildado el checkbox, click en acepto y redirige a la pagina de login de cuenta...
    cy.contains('Acepto').click();
  });
});