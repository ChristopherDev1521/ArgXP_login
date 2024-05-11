# Carpeta de archivos Cypress Spec

../cypress/e2e/ArgXP_LOGIN

# Pruebas automatizadas de inicio de sesión en ArgXP

Este repositorio contiene pruebas automatizadas para el proceso de acceso a inicio de sesión en la aplicación web ArgXP utilizando diferentes proveedores de autenticación como Google, Apple y Microsoft. 


Las pruebas están escritas y configuradas en Cypress con lenguaje aplicado JavaScript, junto a comandos de usabilidad simples para el fin de la tarea, con posterior optimizacion a POM.

## Requisitos previos

- Node.js y npm instalados en el sistema donde realices la prueba.
- Un navegador web compatible con Cypress (Chrome, Firefox, Edge, etc.).

## Configuración del entorno

1. Clonar este repositorio en tu máquina local:

   git clone https://github.com/ChristopherDev1521/ArgXP_login

2. Navegar al directorio del proyecto:

   cd ArgXP_login
   
4. Instala las dependencias del proyecto:

   npm install
   
------------------------------------------------

## Ejecución de las pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

  npm run test

Este comando iniciará Cypress y ejecutará las pruebas en el navegador especificado en la configuración.

## Estructura del proyecto

Una vez configures el UI de cypress para realizar la prueba real, te encontraras con lo siguiente:

Dentro del UI de cypress, en la carpeta e2e/ArgXP_LOGIN encontraras los 3 archivos por definicion de cada plataforma a autentificar.
![image](https://github.com/ChristopherDev1521/ArgXP_login/assets/151284229/f6a290f6-ec12-4e5a-a067-0b764cb0a245)

Por ejemplo, clickeando el archivo apple_spec.cy.js realizara el test integrado en dicho archivo
![image](https://github.com/ChristopherDev1521/ArgXP_login/assets/151284229/dad13750-1676-4979-8386-1566c174bfee)


Dichos archivos de prueba estan estructurados de la siguiente forma tomando el archivo apple.spec.cy.js:

    visita la pagina de acceso a los servicios...
    cy.visit('https://beta.argxp.com/access');

    Busca el boton especifico "Apple"
    cy.contains('Apple').click(); 

    espera a que la ventana emergente de terminos se abra, espera 3 segundos y acepta los terminos mediante el checkbox...
    cy.get('button[role="checkbox"]').should('have.attr', 'aria-checked', 'false').wait(3000).click();

    Una vez habilitado el boton habiendo tildado el checkbox, click en acepto y redirige a la pagina de login de cuenta...
    cy.contains('Acepto').click();


## Agradecimientos

Agradezco a [OpenAI](https://openai.com) por proporcionar ayuda y sugerencia para realizar este reporte.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, por favor consulta el archivo [LICENSE](LICENSE).
