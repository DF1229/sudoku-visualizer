const express = require('express');
const router = express.Router();
const visualizer = require('./visualizer');

router.route('/*')
    .post((req, res) => {
        // handle data input
        // call visualization
        console.log(req.body);
        // process.env.DATA = req.body;
        // visualizer();
        res.sendStatus(200);
    })
    .all((req, res) => {
        res.sendStatus(418);
    });

module.exports = router;