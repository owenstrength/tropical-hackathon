import { Router } from 'express';

import { find } from '../models/cocktail';

const router = Router();


// Routes
router.get('/', (req, res) => {

    find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});