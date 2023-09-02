// const fs = require('fs/promises');


// const getContent = async (req,res) => {
// const content = await fs.readFile('.../db/homeContent.json', 'utf-8');
// };

const homeModel = require('../db/models/homeModel');

const getContent = async (req,res) => {
    const content = await homeModel.getContent();
    res.json(content);

};

const createContent = async(req,res) => {
const data = req.body;
const newContent = await homeModel.createContent(data);
res.json(newContent);
};

module.exports = {getContent, createContent};