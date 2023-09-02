require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();


//Middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json())

//Controllers
const navigationController = require('./server/controllers/navigationController');

const homeController = require('./server/controllers/homeController');

//Routes
app.get('/',navigationController.getIndex);
app.get('/contacto', navigationController.getContacto);

//Metodo para acceder a cierto contenido
app.get('/api/home',homeController.getContent);
app.post('/api/home',homeController.createContent);

//Puerto en el que escucha
app.listen(3000,() => {
    console.log('Server is running on port 3000');

});
