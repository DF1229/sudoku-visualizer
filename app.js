const app = express();

app.all('/', (req, res) => {
    res.send(418);
});

module.exports = app;