const ContactContent = require('../schemas/ContactSchema');
const { conectarDB, desconectarDB } = require('../conection');

const getContent = async () => {
    try {
        await conectarDB();
        const content = await ContactContent.find({});
        return content;

    } catch (error) {
        console.log(error);
    }
    finally {
        await desconectarDB();
    }
};

const createContent = async (data) => {
    console.log("data" + JSON.stringify(data));
    try {
        await conectarDB();
        const content = new ContactContent(data);
        console.log('ContactMODEL')
        const newContent = await content.save();
        return newContent;
    } catch (error) {
        console.log('contactModel ERROR' + error);
    } finally {

        await desconectarDB();
    }

};
module.exports = { getContent,createContent };