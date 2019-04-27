<img src="https://www.logolynx.com/images/logolynx/56/56afea50b83164e3e272d4ebeccd94fb.png" width="100px">

# E_commerce con Node.js, Express y MongoDB

Esta es una aplicación web de comercio electronico desarrollada principalmente con node js, express y MngoDB

+ Administrador de productos
+ Cotizador
+ Método de pago
+ API REST
+ Productos divididos por categorias

## Tecnologías utilizdas

+ [Node.js](https://nodejs.org/es/)
+ [MongoDB](https://www.mongodb.com/)
+ [Express](https://expressjs.com/es/)
+ [Bootstrap](https://getbootstrap.com/)
+ [Pug templates](https://pugjs.org/api/getting-started.html)
+ [JQuery](https://jquery.com/)
+ Otros

## Requerimientos

Descargue e instale node.js
+ [Node.js](https://nodejs.org/es/)

## Instalación

## Clon

Clona este repositorio a tu maquina local usando:

    $git clone https://github.com/AleFernandez96/e_commerce_nodejs.git

## Configuración de base de datos

    Para poder iniciar la aplicación web de forma correcta debes crear una base de datos y un usuario y agregar la configuración en el archivo app.js

```javascript
//Config db

var mongoose = require('mongoose');
var mongoDB = 'My url config';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
```

## Arrancando

Verificar la instlación de Node.js y npm

    $ node -v
    $ npm -v

Iniciando

    $ cd e_commerce
    $ npm install
    $ npm start

## Capturas de pantalla
