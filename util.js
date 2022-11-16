const http = require('./http');

module.exports = {
    verifyPutRequest: (req, res) => {
        const body = req.body;

        if (body == null || body == undefined || body == {})
            return http.status['Bad Request'];

        const data = body.data;
        if (data == null || data == undefined || data == [] || data == {})
            return http.status['Bad Request'];

        if (data.length != 9)
            return http.status['Bad Request'];

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
            return http.status['Bad Request'];
    },
    verifyGetRequest: (req, res) => {
        if (process.env.DATA == null || process.env.DATA == undefined)
            return http.status['Not Found'];

            let ds = JSON.parse(process.env.DATA);
            if (!Number.isInteger(ds.data.length))
                return http.status['Internal Server Error'];
    }
}