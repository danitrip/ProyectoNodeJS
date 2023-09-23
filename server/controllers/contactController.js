const contactModel = require('../db/models/contactModel');

const { conectarDB, desconectarDB  } = require("../db/conection");

const createContent = async(req,res) => {
const data = req.body;
const newContent = await contactModel.createContent(data);

res.json(newContent);
};

const create = async (req, res) => {
    const { empresa,nombre,email,mensaje } = req.body;
    await conectarDB();
    // creamos un usuario con new User y lo guardamos en la base de datos con save()
    const contact = new contactModel({ empresa,nombre,email,mensaje});
    // user.save() es una promesa que retorna el usuario guardado
    const newContact = await contact.save();
    await desconectarDB();
    res.json(newContact);
}


module.exports = { createContent, create};