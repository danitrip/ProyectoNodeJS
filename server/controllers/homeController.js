// const fs = require('fs/promises');


// const getContent = async (req,res) => {
// const content = await fs.readFile('.../db/homeContent.json', 'utf-8');
// };

const homeModel = require('../db/models/home');

const getContent = async (req,res) => {
    const content = await homeModel.getContent();
    res.json(content);

};

module.exports = {getContent};