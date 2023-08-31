//Testeando funcionamiento
// const getIndex = (req,res) => {
//     res.send('Hello World!');

// }

const path = require('path');


const getIndex = (req,res) => {
    const filePath = path.join(__dirname, '../../public/Index.html')
    res.sendFile(filePath);
}


const getContacto = (req,res) => {
    const filePath = path.join(__dirname, '../../public/Contacto.html')
    res.sendFile(filePath);
}

//exportacion de modulos
module.exports = {
    getIndex,
    getContacto,

};