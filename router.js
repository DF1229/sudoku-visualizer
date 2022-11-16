const express = require('express');
const router = express.Router();
const visualizer = require('./visualizer');
const http = require('./http');
const util = require('./util');

router.route('/*')
    .put((req, res) => {
        let reqVal = util.verifyPutRequest(req, res);
        if (reqVal != http.status['OK'] && reqVal != undefined)
            return res.sendStatus(Number.parseInt(reqVal));

        process.env.DATA = JSON.stringify(req.body);
        res.sendStatus(http.status['OK']);
    })
    .get((req, res) => {
        let reqVal = util.verifyGetRequest(req, res);
        if (reqVal != http.status['OK'] && reqVal != undefined)
            return res.sendStatus(reqVal);

        visualizer(req, res);
    })
    .delete((req, res) => {
        delete process.env.DATA;
        res.sendStatus(http.status['OK']);
    })
    .all((req, res) => {
        res.sendStatus(http.status['Method Not Allowed']);
    });

module.exports = router;