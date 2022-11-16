const http = require('./http');

module.exports = {
    verifyPutRequest: (req, res) => {
        const body = req.body;

        if (body == null || body == undefined || body == {})
            return res.sendStatus(http.status['Bad Request']);

        const data = body.data;
        if (data == null || data == undefined || data == [] || data == {})
            return res.sendStatus(http.status['Bad Request']);

        if (data.length != 9)
            return res.sendStatus(http.status['Bad Request']);

        let fail = false;
        data.forEach(row => {
            row.forEach(cell => {
                if (cell > 9 || cell < 0)
                    fail = true;

                if (!Number.isInteger(cell))
                    fail = true;
            });
        });

        if (fail) 
            return res.sendStatus(http.status['Bad Request']);
    },
    verifyGetRequest: (req, res) => {
        if (process.env.DATA == null || process.env.DATA == undefined)
            return res.sendStatus(http.status['Not Found']);

        if (process.env.DATA == {})
            return res.sendStatus(http.status['Service Unavailable']);

        return res.sendStatus(http.status['Not Implemented']);
    }
}