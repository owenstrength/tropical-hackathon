const express = require('express');

const Cocktail = require('../models/cocktails');
const router = express.Router();






// Routes
router.get('/', (req, res) => {

    Cocktail.find({ })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
            res.json(error);
        });
});

module.exports = router;