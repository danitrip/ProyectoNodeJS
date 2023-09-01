require('dotenv').config();
const express = require('express');

const User = require('./db/schemas/UserSchema');
const userController = require('./controllers/userController');
const { conectarDB, desconectarDB } = require('./db/conection')
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.get('/users', userController.getAll);
app.post('/user', userController.create);
app.put("/user/:id", userController.update);
app.delete("/user/:id", userController.deleteUser);

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto " + PORT);
});


// instalar
// npm i mongoose
// npm i express
// npm i dotenv
// npm i nodemon -D

// Actividad
// Crear un enpoint GET /products
app.get('/products', userController.getAll);
// Crear un enpoint POST /product
app.post('/product', userController.create);
// Crear un Schema para Product
app.put("/product/:id", userController.update);
// Crear un modelo para Product