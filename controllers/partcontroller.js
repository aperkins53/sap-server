const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validate-session');
const valideteAdmin = require('../middleware/validate-admin');
const part = require('../models/part');
const validateAdmin = require('../middleware/validate-admin');
const Part = require('../db').import('../models/part');

router.post('/postSale', validateSession, validateAdmin, (req, res) => {
    const partForSale = {
        partName: req.body.part.partName,
        grade: req.body.part.grade,
        price: req.body.part.price,
        carYear: req.body.part.carYear,
        carMake: req.body.part.carMake,
        carModel: req.body.part.carModel,
        img: req.body.part.img
    }
    Part.create(partForSale)
        .then(part => res.status(200).json(part))
        .catch(err => res.status(500).json({ error: err }))
});

router.get('/', (req, res) => {
    Part.findAll()
        .then(parts => res.status(200).json(parts))
        .catch(err => res.status(500).json({ error: err }))
});

router.get('/:partName', (req, res) => {
    let partName = req.params.partName;

    Part.findAll({
        where: { partName: partName }
    })
        .then(parts => res.status(200).json(parts))
        .catch(err => res.status(500).json({ error: err }))
});

router.put('/update/:id', validateSession, validateAdmin, (req, res) => {
    const listingToUpdate = {
        partName: req.body.part.partName,
        grade: req.body.part.grade,
        price: req.body.part.price,
        carYear: req.body.part.carYear,
        carMake: req.body.part.carMake,
        carModel: req.body.part.carModel,
        img: req.body.part.img
    };

 
    const query = { where: { id: req.params.id }};

    Part.update(listingToUpdate, query)
        .then((parts) => res.status(200).json(parts))
        .catch((err) => res.status(500).json({ error: err }));
});

router.delete('/delete/:id', validateSession, validateAdmin, (req, res) => {
    const query = { where: { id: req.params.id }};

    Part.destroy(query)
        .then(() => res.status(200).json({ message: 'listing removed' }))
        .catch((err) => res.status(500).json({ error: err }));

});

module.exports = router;