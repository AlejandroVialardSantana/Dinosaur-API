const express = require('express');
const router = express.Router();
const dinosaurController = require('../controllers/dinosaurController');

router
    .get('/', (req, res) => {
        res.send('<h1>Welcome to the Dino API!</h1>');
    })

    .get('/api/dinosaurs', dinosaurController.getAllDinosaurs)

    .get('/api/dinosaurs/:id', dinosaurController.getDinosaurById)

    .post('/api/dinosaurs', dinosaurController.createDinosaur)

    .put('/api/dinosaurs/:id', dinosaurController.updateDinosaur)

    .delete('/api/dinosaurs/:id', dinosaurController.deleteDinosaur);

module.exports = router;