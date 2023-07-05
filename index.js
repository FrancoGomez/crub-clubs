const express = require("express");
const exphbs = require("express-handlebars");

const teamRouter = require("./src/routes/teams.routes");
require("dotenv").config();

const app = express();
const { PORT } = process.env;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.text());

app.use(express.static("public/"));
app.use(express.static("public/img"));
app.use(express.static("public/src"));

app.use("/", teamRouter);

app.listen(PORT || 8080);
