require('dotenv').config();

const PORT = 3000
const express = require('express');
const path = require('path');
const app = express();


//Middleware
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json())

//Controllers
const navigationController = require('./server/controllers/navigationController');

const homeController = require('./server/controllers/homeController');
const userController = require('./server/controllers/userController');
//Routes
app.get('/',navigationController.getIndex);
app.get('/contacto', navigationController.getContacto);

//Metodo para acceder a cierto contenido
app.get('/api/home',homeController.getContent);
app.post('/api/home',homeController.createContent);

app.get('/users', userController.getAll);
app.post('/user', userController.create);
app.put("/user/:id", userController.update);
app.delete("/user/:id", userController.deleteUser);

//Puerto en el que escucha
app.listen(3000,() => {
    console.log(`Running on http://localhost:${PORT}`);

});
