require('dotenv').config(); //para leer el archivo .env

const express = require('express');
const morgan = require('morgan');

//initializations
const app = express(); //creamos el servidor
require('./database'); //utilizamos nuestra conexión a la bd

//settings
app.set('port', 4000);

//middlewares
app.use(morgan('dev')); //nos muestra por consola las peticiones http
app.use(express.json()); //trabajaremos con json

//routes
app.use('/api/tareas', require('./routes/tareas.routes')); //end point task

//starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});