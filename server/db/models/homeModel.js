const HomeContent = require('../schemas/HomeSchema');
const { conectarDB, desconectarDB } = require('../conection');

const getContent = async () => {
    try {
        await conectarDB();
        const content = await HomeContent.find({});
        return content;

    } catch (error) {
        console.log(error);
    }
    finally {
        await desconectarDB();
    }
};

const createContent = async (data) => {
    try {
        await conectarDB();
        const content = new HomeContent(data);
        console.log('HOMEMODEL')
        const newContent = await content.save();
        return newContent;
    } catch (error) {
        console.log(error);
    } finally {

        await desconectarDB();
    }

};
module.exports = { getContent,createContent };