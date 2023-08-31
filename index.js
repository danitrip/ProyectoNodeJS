const express = require('express');
const path = require('path');
const app = express();


//Middleware
app.use(express.static(path.join(__dirname, './public')));

//Controllers
const navigationController = require('./server/controllers/navigationController');

//Routes
app.get('/',navigationController.getIndex);
app.get('home', navigationController.getHome);

//Puerto en el que escucha
app.listen(3000,() => {
    console.log('Server is running on port 3000');

});
