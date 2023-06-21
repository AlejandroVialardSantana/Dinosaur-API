const db = require('./db');
const { saveToDatabase } = require('./utils');

const getAllDinosaurs = () => {
    return db.dinosaurs;
};

const getDinosaurById = (id) => {
    const dinosaur = db.dinosaurs.find((dinosaur) => dinosaur.id === id);
    return dinosaur;
};

const createDinosaur = (newDinosaur) => {
    const isAlreadyInDatabase = db.dinosaurs.findIndex(
        (dinosaur) => dinosaur.name === newDinosaur.name
    );

    if (isAlreadyInDatabase !== -1) {
        return;
    }

    db.dinosaurs.push(newDinosaur);
    saveToDatabase(db);
    return newDinosaur;
};

module.exports = {
    getAllDinosaurs,
    getDinosaurById,
    createDinosaur
};
    