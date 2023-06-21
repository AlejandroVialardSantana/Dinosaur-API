const dinosaurService = require("../services/dinosaurServices");

const getAllDinosaurs = (req, res) => {
    const allDinosaurs = dinosaurService.getAllDinosaurs();
    res.send({status: 200, data: allDinosaurs});
};

const getDinosaurById = (req, res) => {
    const dinosaur = dinosaurService.getDinosaurById(req.params.id);
    
    if (!dinosaur) {
        res.status(404).send({status: 404, message: "Dinosaur not found"});
        return;
    }
    
    res.send({status: 200, data: dinosaur});
};

const createDinosaur = (req, res) => {
    const { body } = req;

    if ( !body.name || !body.diet) return;

    const newDinosaur = {
        name: body.name,
        diet: body.diet,
    };

    const createdDinosaur = dinosaurService.createDinosaur(newDinosaur);
    res.status(201).send({status: 201, data: createdDinosaur});
};

const updateDinosaur = (req, res) => {
    const updatedDinosaur = dinosaurService.updateDinosaur(req.params.id);
    res.send("updateDinosaur");
};

const deleteDinosaur = (req, res) => {
    deleteDinosaur = dinosaurService.deleteDinosaur();
    res.send("deleteDinosaur");
};

module.exports = {
    getAllDinosaurs,
    getDinosaurById,
    createDinosaur,
    updateDinosaur,
    deleteDinosaur,
};