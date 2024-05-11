
//Se importan los objetos
import HomePage from '../page_objects/HomePage';
import AccessPage from '../page_objects/AccessPage';
import GooglePage from '../page_objects/GooglePage';
import ApplePage from '../page_objects/ApplePage';
import MicrosoftPage from '../page_objects/MicrosoftPage';

//Describimos el titulo.
describe('Inicio de sesión distintas cuentas', () => {

  //Creamos los objetos con los metodos de los archivos complementarios
  const homePage = new HomePage();
  const accessPage = new AccessPage();
  const googlePage = new GooglePage();
  const applePage = new ApplePage();
  const microsoftPage = new MicrosoftPage();
  


  //Usamos beforeEach para realizar pruebas consecutivas...
  beforeEach(() => {
  homePage.visitHomePage();
  homePage.clickAccederButton();

    // Dado que indica error en React App de la web. Utilizamos la escucha de evento 'uncaught:exception' para que la prueba continue...
    cy.on('uncaught:exception', (err, runnable) => {
      return false; // Devuelve false para que no cancele la prueba por error en la app...
    });
  });
//Fase 1 de la prueba
  it('Prueba de acceso por Google', () => {
    accessPage.verifyAccessPage(); //Verifica pagina de acceso
    accessPage.clickGoogleButton(); //Boton Google
    accessPage.acceptTermsAndConditions(); //checkbox y click en acepto
  });

  //Fase 2 de la prueba
  it('Prueba de acceso Apple ID', () => {
    accessPage.verifyAccessPage(); //Verifica pagina de acceso
    accessPage.clickAppleButton(); //Boton Apple
    accessPage.acceptTermsAndConditions(); //checkbox y click en acepto
  });
  //Fase 3 de la prueba
  it('Prueba de acceso con cuenta Microsoft', () => {
    accessPage.verifyAccessPage(); //Verifica pagina de acceso
    accessPage.clickMicrosoftButton(); //Boton Microsoft
    accessPage.acceptTermsAndConditions(); //checkbox y click en acepto
  });
});