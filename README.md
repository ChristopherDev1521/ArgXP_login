# Sistema de versiones utilizados

- Visual Studio Code 1.89.1
- Git version 2.45.0
- NPM version: 10.7
- NodeJS version: 20.13.1
- Cypress package version: 13.9.0
- Cypress binary version: 13.9.0
- Electron version: 27.3.10
- Bundled Node version: 18.17.1

# Carpeta de archivos Cypress Spec

../cypress/e2e/test_login_spec.cy.js

# Carpeta de archivos POM

../cypress/page_objects

# Pruebas automatizadas de inicio de sesión en ArgXP

Este repositorio contiene pruebas automatizadas para el proceso de acceso a inicio de sesión en la aplicación web ArgXP utilizando diferentes proveedores de autenticación como Google, Apple y Microsoft. 

Las pruebas están escritas y configuradas en Cypress con lenguaje aplicado JavaScript, junto a comandos de usabilidad simples para el fin de la tarea.

Se ha optimizado a traves de POM para la organizacion y mantencion del codigo posteriormente.

## Requisitos previos

- Un editor de codigo, en este caso Visual Studio Code.
- Node.js que podes descargar e instalar en tu sistema https://nodejs.org/en/download
- Mediante CMD o Windows Powershell instalar dependencias globales y esenciales para realizar las pruebas: npm install -g npm
- Git instalado, el utilizado en este proyecto es: 2.45.0
- Un navegador web compatible con Cypress (Chrome, Firefox, Edge, etc.).

## Configuración del entorno y Ejecucion de pruebas

1. Clonar este repositorio en tu máquina local:

   git clone https://github.com/ChristopherDev1521/ArgXP_login

2. Navegar al directorio de la carpeta donde se realizó la clonacion del repositorio:

   cd c:/****/repositorio
   
4. Instala las dependencias del proyecto dentro de la carpeta del repositorio:

   npm install -g

5. Instalar dependencias ce CYPRESS dentro de la carpeta del repositorio:

   npm install cypress

5. Deberia agregarse una carpeta complementaria llamada "node_modules" que es vital para el proceso y deberia quedar de esta manera en tu maquina:

   ![image](https://github.com/ChristopherDev1521/ArgXP_login/assets/151284229/c9b69e15-269d-4e87-bbdb-fedbde38feff)
   
6. Teniendo el entorno cypress ya instalado en la carpeta podemos omitir el proceso incial haciendo click derecho dentro de la carpeta del repositorio clonado, sobre area vacia, "abrir en terminal"

   - Se abrira una terminal de comandos a la cual deberas ingresar la siguiente linea: npx cypress open.
   - Se abrirá la interfaz de cypress donde estará configurado el entorno de pruebas.

![image](https://github.com/ChristopherDev1521/ArgXP_login/assets/151284229/0618f4bf-4c5c-494f-a2ae-7df44775bf1e)

   - Seleccionar "E2E Testing"
   - Elegir un navegador de los instalados y soportados.
   - Click en "Start E2E Testing in Edge/Chrome/Firefox"
      
![image](https://github.com/ChristopherDev1521/ArgXP_login/assets/151284229/f0f88cc2-666e-4525-8b4f-2f674f9558ee)

   - Se abrira la ventana del navegador de pruebas
   - Al elegir "E2E Testing" se abre automaticamente la carpeta con el mismo nombre dentro del directorio del repo el cual se encuentra el archivo de pruebas.

![image](https://github.com/ChristopherDev1521/ArgXP_login/assets/151284229/e6399faf-7f07-4c00-88fd-da4dd359c12d)

   - Hacer click en el archivo visualizado "test_login_spec.cy.js"
   - El proceso de pruebas se realiza automaticamente.

![image](https://github.com/ChristopherDev1521/ArgXP_login/assets/151284229/29a04d60-3cc4-4081-8806-3dc7a6c6755f)


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
