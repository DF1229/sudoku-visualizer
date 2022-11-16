require('dotenv').config();

const express = require('express');
const app = express();

const router = require('./router');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
app.use(express.json());

app.use('/', router);
app.listen(process.env.API_PORT);