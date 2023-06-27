const express = require('express');

const teamRouter = require('./routes/teams.routes');
require('dotenv').config();

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(express.text());
app.use('/teams', teamRouter);

app.listen(PORT || 8080);
