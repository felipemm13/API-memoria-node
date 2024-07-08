#API-NODE
Este proyecto contiene la implementación inicial de la API utilizando Node.js y Express. Esta versión está diseñada para facilitar el desarrollo y pruebas antes de la implementación final en C#.

Requisitos Previos
Antes de comenzar, asegúrate de tener instalado Node.js en tu máquina. Puedes descargarlo desde nodejs.org.

Instalación
Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del directorio del proyecto:

bash
Copiar código
npm install
Este comando instalará todas las dependencias necesarias para ejecutar la API.

Configuración
Asegúrate de configurar las variables de entorno necesarias para el proyecto. Estas pueden incluir conexiones a bases de datos y otros servicios externos. Crea un archivo .env en la raíz del proyecto y añade las variables necesarias como se muestra a continuación:

makefile
Copiar código
DB_HOST=localhost
DB_USER=root
DB_PASS=s1mpl3
Ejecución
Para iniciar la API, ejecuta el siguiente comando:

bash
Copiar código
npm run start
Este comando arrancará el servidor localmente en el puerto especificado en tu configuración o en un puerto predeterminado.

Uso
Una vez que el servidor esté en funcionamiento, podrás hacer peticiones a los endpoints definidos en la documentación de la API. Utiliza herramientas como Postman o cURL para interactuar con la API.

Construido con
Node.js - Entorno de ejecución para JavaScript.
Express - Framework de Node.js para aplicaciones web y APIs.
Mongoose - ODM para MongoDB.
