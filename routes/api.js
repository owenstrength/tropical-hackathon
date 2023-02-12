const express = require('express');

const Cocktail = require('../models/cocktails');
const router = express.Router();






// Routes
router.get('/', (req, res) => {

    let isRandom = true;
    let Random = null
    if (isRandom) {
        Random = Math.round(Math.random() * (546))

    }
    console.log(Random)

    Cocktail.find({ "" : Random})
        .then((data) => {
            console.log('Data: ', data);
            res.send(data);
        })
        .catch((error) => {
            console.log('error: ', error);
            res.json(error);
        });
});

module.exports = router;