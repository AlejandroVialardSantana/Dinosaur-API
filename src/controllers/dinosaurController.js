const dinosaurService = require("../services/dinosaurServices");
const config = require("../config");

const getAllDinosaurs = async (req, res) => {
    try {
        const allDinosaurs = await dinosaurService.getAllDinosaurs();
        res.send({ status: 200, data: allDinosaurs });
    } catch (error) {
        res.status(500).send({ status: 500, message: "Server error" });
    }
};

const getDinosaurById = async (req, res) => {
    try {
        const dinosaur = await dinosaurService.getDinosaurById(req.params.id);

        if (!dinosaur) return res.status(404).send({ status: 404, message: "Dinosaur not found" });

        res.send({ status: 200, data: dinosaur });
    } catch (error) {
        res.status(500).send({ status: 500, message: "Server error" });
    }
};

const createDinosaur = async (req, res) => {
    const { body } = req;

    try {
        if (!body.name || !body.diet || !body.period || !body.length || !body.weight || !body.description) return res.status(400).send({ status: 400, message: "Missing required information" });

        const newDinosaur = { name: body.name, diet: body.diet, period: body.period, length: body.length, weight: body.weight, description: body.description };

        const createdDinosaur = await dinosaurService.createDinosaur(newDinosaur);

        if (createdDinosaur === undefined) return res.status(409).send({ status: 409, message: "Dinosaur already exists" });

        res.status(201).send({ status: 201, data: createdDinosaur });
    } catch (error) {
        res.status(500).send({ status: 500, message: "Server error" });
    }
};

const updateDinosaur = async (req, res) => {
    const { body } = req;

    try {
        const dinosaur = await dinosaurService.getDinosaurById(req.params.id);

        if (!dinosaur) return res.status(404).send({ status: 404, message: "Dinosaur not found" });

        const imageUrl = req.file ? `http://${config.DB_HOST}:${config.PORT}/uploads/${req.file.filename}` : dinosaur.imageUrl;

        const updatedDinosaur = await dinosaurService.updateDinosaur(body.name, body.diet, body.period, body.length, body.weight, body.description, imageUrl, req.params.id);

        res.send({ status: 200, data: updatedDinosaur });
    } catch (error) {
        res.status(500).send({ status: 500, message: "Server error" });
    }
};

const deleteDinosaur = async (req, res) => {
    try {
        const dinosaur = await dinosaurService.getDinosaurById(req.params.id);

        if (!dinosaur) return res.status(404).send({ status: 404, message: "Dinosaur not found" });

        await dinosaurService.deleteDinosaur(req.params.id);

        res.send({ status: 200, message: "Dinosaur deleted" });
    } catch (error) {
        res.status(500).send({ status: 500, message: "Server error" });
    }
};

module.exports = {
    getAllDinosaurs,
    getDinosaurById,
    createDinosaur,
    updateDinosaur,
    deleteDinosaur,
};