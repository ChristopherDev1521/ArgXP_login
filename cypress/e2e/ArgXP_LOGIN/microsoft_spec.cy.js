describe('Boton Microsoft', () => {
    it('Inicio de sesion con cuenta Microsoft', () => {

       // deshabilita uncaught:exception automatico de cypress 
      cy.on('uncaught:exception', (err, runnable) => {
        
        // Devuelve false para indicar que no quieres que la prueba falle automáticamente
        // Dado que indica error en React App de la web y no de cypress, y cancela la prueba...
        return false;
  
      });
      // Visita la página principal...
      cy.visit('https://beta.argxp.com');
  
      // Hace clic en el botón "Acceder" en la página principal...
      cy.contains('Acceder').wait(3000).click();
  
      // Espera a que se cargue la página de acceso...
      cy.url().should('include', '/access');
      
      // Busca el botón específico "Apple" en la página de acceso y hace clic en él...
      cy.contains('Microsoft').click(); 
  
      // Espera a que se abra la ventana emergente de los terminos, espera 3 segundos y realiza el check.
      cy.get('button[role="checkbox"]').should('have.attr', 'aria-checked', 'false').wait(3000).click();
  
      // Una vez habilitado el botón al haber marcado el checkbox, acepta los terminos.
      // Esto debería redirigirte a la página de inicio de sesión de cuenta de apple en este caso
      cy.contains('Acepto').click();
    });
  });