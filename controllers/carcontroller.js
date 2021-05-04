const express = require('express');
const router = express.Router();
const validateSession = require('../middleware/validate-session');
const validateAdmin = require('../middleware/validate-admin');
const Car = require('../db').import('../models/car');

router.post('/postSale', validateSession, validateAdmin, (req, res) => {
    const carForSale = {
        year: req.body.car.year,
        make: req.body.car.make,
        model: req.body.car.model,
        color: req.body.car.color,
        mileage: req.body.car.mileage,
        vin: req.body.car.vin,
        description: req.body.car.description,
        img: req.body.car.img,
        ownerId: req.user.id
    }
    Car.create(carForSale)
        .then(car => res.status(200).json(car))
        .catch(err => res.status(500).json({ error: err }))
});

router.get('/', (req, res) => {
    Car.findAll()
        .then(cars => res.status(200).json(cars))
        .catch(err => res.status(500).json({ error: err }))
});

router.get('/:year/:make/:model', (req, res) => {
    let year = req.params.year;
    let make = req.params.make;
    let model = req.params.model;

    Car.findAll({
        where: {year: year, make: make, model: model}
    })
        .then(cars => res.status(200).json(cars))
        .catch(err => res.status(500).json({ error: err }))
});

router.put('/update/:id', validateSession, validateAdmin, (req, res) => {
    const listingToUpdate = {
        year: req.body.car.year,
        make: req.body.car.make,
        model: req.body.car.model,
        color: req.body.car.color,
        mileage: req.body.car.mileage,
        vin: req.body.car.vin,
        description: req.body.car.description,
        img: req.body.car.img
    };

    const query = {where: { id: req.params.id }};

    Car.update(listingToUpdate, query)
        .then((cars) => res.status(200).json(cars))
        .catch((err) => res.status(500).json({ error: err }));
});

router.delete('/delete/:id', validateSession, validateAdmin, (req, res) => {
    const query = { where: { id: req.params.id }};

    Car.destroy(query)
        .then(() => res.status(200).json({ message: 'listing removed' }))
        .catch((err) => res.status(500).json({ error: err }));
});

module.exports = router;