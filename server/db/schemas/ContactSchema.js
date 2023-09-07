const mongoose = require('mongoose');
const {Schema, model } = mongoose;

const contactSchema = new Schema({
    empresa: String,
    nombre: String,
    email: String,
    mensaje: String,
    
});

const Contact = model('Contact',contactSchema);
module.exports = Contact;