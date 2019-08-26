const express = require('express'); //requerimos express

const app = express(); //creamos el servidor

//settings
app.set('port', 3000); //definimos el puerto

//middlewares
app.use(express.json()); //le decimos a express que va a trabajar con datos de tipo json

//Routes
app.get('/', (req, res) => {
    //Product.find()
    res.json({
        message: 'Leyendo recursos'
    });
});

app.get('/:id', (req, res) => {
    //Product.findById()
    res.json({
        message: 'Leyendo un recurso'
    });
});

app.post('/', (req, res) => {
    //new Product
    res.json({
        message: 'Creando un recurso',
        data: req.body
    });
});

app.delete('/:id', (req, res) => {
    //Product.findByIdAndDelete()
    res.json({
        message: 'Eliminando recurso',
        id_recurso: req.params.id
    });
});

app.put('/:id', (req, res) => {
    //Product.findByIdAndUpdate()
    res.json({
        message: 'Actualizando un recurso',
        id_recurso: req.params.id,
        new_data: req.body
    });
});

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})