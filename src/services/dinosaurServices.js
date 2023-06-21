const { v4: uuidv4 } = require('uuid');
const Dinosaur = require('../database/Dinosaur');

const getAllDinosaurs = () => {
    const allDinosaurs = Dinosaur.getAllDinosaurs();
    return allDinosaurs;
};
const getDinosaurById = (id) => { 
    const dinosaur = Dinosaur.getDinosaurById(id);
    return dinosaur;
};
const createDinosaur = (newDinosaur) => { 
    const dinosaur = {
        ...newDinosaur,
        id: uuidv4()
    };
    
    const createdDinosaur = Dinosaur.createDinosaur(dinosaur);
    return createdDinosaur;
};
const updateDinosaur = () => { return };
const deleteDinosaur = () => { return };

module.exports = {
    getAllDinosaurs,
    getDinosaurById,
    createDinosaur
};