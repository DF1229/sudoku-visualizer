const http = require('./http');

module.exports = (req, res) => {
    const dataset = JSON.parse(process.env.DATA);
    res.status(200).render('sudoku', dataset, (err, html) => {
        if (err)
            return res.status(http.status['Internal Server Error']).send(err);
        else
            res.send(html);
    });
};