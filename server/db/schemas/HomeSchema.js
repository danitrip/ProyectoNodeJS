const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const homeSchema = new Schema({
    titulo: String,
    parrafo: String,

});

const Home = model('HomeContent', homeSchema);
module.exports = Home;
