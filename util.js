const http = require('./http');

module.exports = {
    verifyPutRequest: (req, res) => {
        const body = req.body;
        
        if (body == null || body == undefined || body == {})
            res.sendStatus(http.status['Bad Request']);
        
        const data = body.data;
        if (data == null || data == undefined || data == [] || data == {})
            res.sendStatus(http.status['Bad Request']);

        if (data.length != 9)
            res.sendStatus(http.status['Bad Request']);
        
        res.sendStatus(http.status['OK']);
    },
    verifyGetRequest: (req, res) => {
        if (process.env.DATA == null || process.env.DATA == undefined)
            res.sendStatus(http.status['Bad Request']);

        if (process.env.DATA == {})
            res.sendStatus(http.status['Service Unavailable']);

        res.sendStatus(http.status['Not Implemented']);
    }
}