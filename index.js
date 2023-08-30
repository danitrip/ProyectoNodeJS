const express = require('express');
const app = express();


//Controllers
const navigationController = require('./server/controllers/navigationControllers');
app.get('/',navigationController.getIndex);

app.listen(3000,() => {
    console.log('Server is running on port 3000');

});
