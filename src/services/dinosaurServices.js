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
    const createdDinosaur = Dinosaur.createDinosaur(newDinosaur);
    return createdDinosaur;
};

const updateDinosaur = (name, diet, id) => { 
    const updatedDinosaur = Dinosaur.updateDinosaur(name, diet, id);
    return updatedDinosaur;
};

const deleteDinosaur = (id) => {
    const deletedDinosaur = Dinosaur.deleteDinosaur(id);
    return deletedDinosaur;    
};

module.exports = {
    getAllDinosaurs,
    getDinosaurById,
    createDinosaur,
    updateDinosaur,
    deleteDinosaur
};