import HomePage from '../page_objects/HomePage';
import AccessPage from '../page_objects/AccessPage';
import GooglePage from '../page_objects/GooglePage';
import ApplePage from '../page_objects/ApplePage';
import MicrosoftPage from '../page_objects/MicrosoftPage';

describe('Inicio de sesión distintas cuentas', () => {
  const homePage = new HomePage();
  const accessPage = new AccessPage();
  const googlePage = new GooglePage();
  const applePage = new ApplePage();
  const microsoftPage = new MicrosoftPage();
  
  beforeEach(() => {
  homePage.visitHomePage();
  homePage.clickAccederButton();

    // Dado que indica error en React App de la web y no de Cypress, y cancela la prueba...
    cy.on('uncaught:exception', (err, runnable) => {
      return false; // Devuelve false para que no cancele la prueba por error en la app...
    });
  });

  it('Prueba de acceso por Google', () => {
    accessPage.verifyAccessPage();
    accessPage.clickGoogleButton();
    accessPage.acceptTermsAndConditions();
  });

  it('Prueba de acceso Apple ID', () => {
    accessPage.verifyAccessPage();
    accessPage.clickAppleButton();
    accessPage.acceptTermsAndConditions();
  });

  it('Prueba de acceso con cuenta Microsoft', () => {
    accessPage.verifyAccessPage();
    accessPage.clickMicrosoftButton();
    accessPage.acceptTermsAndConditions();
  });
});