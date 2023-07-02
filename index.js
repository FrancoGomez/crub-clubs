const express = require("express");
const exphbs = require("express-handlebars");

const teamRouter = require("./src/routes/teams.routes");
require("dotenv").config();

const app = express();
const { PORT } = process.env;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home", {
    helpers: {
      returnPath: () => {{ return __dirname}},
    },
  });
});

app.use(express.json());
app.use(express.text());
app.use("/teams", teamRouter);

app.listen(PORT || 8080);
