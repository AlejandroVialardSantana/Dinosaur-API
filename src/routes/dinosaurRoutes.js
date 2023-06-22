const express = require('express');
const router = express.Router();
const dinosaurController = require('../controllers/dinosaurController');

router
    .get('/', (req, res) => {
        res.send('<h1>Welcome to the Dino API!</h1>');
    })

    .get('/dinosaurs', dinosaurController.getAllDinosaurs)

    .get('/dinosaurs/:id', dinosaurController.getDinosaurById)

    .post('/dinosaurs', dinosaurController.createDinosaur)

    .patch('/dinosaurs/:id', dinosaurController.updateDinosaur)

    .delete('/dinosaurs/:id', dinosaurController.deleteDinosaur)

module.exports = router;