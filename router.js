const express = require('express');
const router = express.Router();
const visualizer = require('./visualizer');
const util = require('./util');

router.route('/*')
    .put((req, res) => {
        util.verifyPutRequest(req, res);
    })
    .get((req, res) => {
        util.verifyGetRequest(req, res);

                
    })
    .all((req, res) => {
        res.sendStatus(405); // 405 Method Not Allowed
    });

module.exports = router;