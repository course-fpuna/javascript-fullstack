const express = require('express');
const morgan = require('morgan');
const path = require('path');
const SocketIo = require('socket.io');

require('dotenv').config();

const app = express();

//settings
app.set('port', process.env.PORT || 4000);
require('./database');

//static files
app.use(express.static(path.join(__dirname, 'public'))); //public, accedida por el navegador

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/productos', require('./routes/productos.routes'));
app.use('/api/compras', require('./routes/compras.routes'));

//starting the server
const server = app.listen(app.get('port'), () => {
   console.log('Server on port', app.get('port')); 
});

const io = SocketIo(server);

io.on('connect', () => {
   console.log('Alguien conectándose');
});