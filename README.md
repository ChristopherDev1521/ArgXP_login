# Carpeta de archivos Cypress Spec

../cypress/e2e/test_login_spec.cy.js

# Pruebas automatizadas de inicio de sesión en ArgXP

Este repositorio contiene pruebas automatizadas para el proceso de acceso a inicio de sesión en la aplicación web ArgXP utilizando diferentes proveedores de autenticación como Google, Apple y Microsoft. 


Las pruebas están escritas y configuradas en Cypress con lenguaje aplicado JavaScript, junto a comandos de usabilidad simples para el fin de la tarea.

Se ha optimizado a traves de POM para la organizacion y mantencion del codigo posteriormente.

## Requisitos previos

- Node.js y npm instalados en el sistema donde realices la prueba.
- Un navegador web compatible con Cypress (Chrome, Firefox, Edge, etc.).

## Configuración del entorno

1. Clonar este repositorio en tu máquina local:

   git clone https://github.com/ChristopherDev1521/ArgXP_login

2. Navegar al directorio del proyecto:

   cd e2e
   
4. Instala las dependencias del proyecto:

   npm install
   
------------------------------------------------

## Ejecución de las pruebas

Para ejecutar las pruebas, utiliza el siguiente comando:

  npm run test

Este comando iniciará Cypress y ejecutará las pruebas en el navegador especificado en la configuración.

## Estructura del proyecto

Una vez configures el UI de cypress para realizar la prueba real, te encontraras con lo siguiente:

La estructura POM esta basada en 1 archivo de pruebas mas la carpeta page_objects en la que se encuentra acentada cada comando y movimiento a realizar por el framework de testing, en este caso cypress.


## Agradecimientos

Agradezco a [OpenAI](https://openai.com) por proporcionar ayuda y sugerencia para realizar este reporte.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, por favor consulta el archivo [LICENSE](LICENSE).
