const express = require('express');
const router = express.Router();
const visualizer = require('./visualizer');
const http = require('./http');
const util = require('./util');

router.route('/*')
    .put((req, res) => {
        util.verifyPutRequest(req, res);
        process.env.DATA = JSON.stringify(req.body.data);
        
        res.sendStatus(http.status['OK']);
    })
    .get((req, res) => {
        util.verifyGetRequest(req, res);

        visualizer(req, res);
    })
    .delete((req, res) => {
        delete process.env.DATA;
        res.sendStatus(http.status['OK']);
    })
    .all((req, res) => {
        res.sendStatus(405); // 405 Method Not Allowed
    });

module.exports = router;