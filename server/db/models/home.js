const fs = require('fs/promises');

const getContent = async () => {
const content = await fs.readFile('./server/db/homeContent.json', 'Utf-8');
return JSON.parse(content);  // returns an object with the parsed data from json file
};

module.exports = {getContent};