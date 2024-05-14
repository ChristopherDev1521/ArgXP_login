# Sistema de versiones utilizados

- NPM version: 10.7
- NodeJS version: 20.13.1
- Cypress package version: 13.9.0
- Cypress binary version: 13.9.0
- Electron version: 27.3.10
- Bundled Node version: 18.17.1

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

![image](https://github.com/ChristopherDev1521/ArgXP_login/assets/151284229/5eb9bcd8-c14a-4f70-909f-4a52ceb8822b)

   Aqui estructurada la informacion de codigo utilizando un beforeEach(() para realizar la seguidilla de pruebas por cada plataforma declarada asi una vez terminada una, comienza la otra enseguida. En este caso "Google, Apple y Microsoft".

![image](https://github.com/ChristopherDev1521/ArgXP_login/assets/151284229/dfdbefaf-4755-4f11-9bd4-05b9371ce81f)

   Aqui el archivo para la pagina principal.

![image](https://github.com/ChristopherDev1521/ArgXP_login/assets/151284229/a1392e0b-274d-4e87-8487-eacfe1b33bd5)

   Aqui la esctructura para una ves realizado click en "acceder" rediriga a pantalla de logeo. 
   Terminos y condiciones es una ventana emergente que impacta la primera vez que se realiza la accion por lo tanto
   cypress tiene la configuracion para realizar el checkbox de la ventana emergente y posteriormente hace click en aceptar para la configuracion siguiente, cual sea el metodo de registro elegido.

![image](https://github.com/ChristopherDev1521/ArgXP_login/assets/151284229/fbdbb4da-d85b-4ccd-b06a-dc992e686753)

   Estos son los botones de configuracion, segun los atributos o selectores en este caso busca la palabra "google, apple o microsoft" y realiza la accion en el mismo llevando a la ventana de terminos y condiciones.

![image](https://github.com/ChristopherDev1521/ArgXP_login/assets/151284229/ecfe54e3-16c2-4e62-b952-31d880cb1e3b)

Al ejecutar las pruebas, deberian realizarse sin problemas.

Se ha probado tanto en Firefox, Edge y Chrome.


## Agradecimientos

Agradezco a [OpenAI](https://openai.com) por proporcionar ayuda y sugerencia para realizar este reporte.

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, por favor consulta el archivo [LICENSE](LICENSE).
