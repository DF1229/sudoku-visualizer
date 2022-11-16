const http = require('./http');

module.exports = (req, res) => {
    const dataset = JSON.parse(process.env.DATA);
    res.status(200).render('sudoku', { "data": dataset.data });
};