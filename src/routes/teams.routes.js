const { Router } = require("express");
const multer = require("multer");

const searchDB = require("../services/searchDB.services");
const modifyDB = require("../services/modifyDB.services");
const { isEven } = require("../helpers/helpers");

require("dotenv").config();

const teamRouter = Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/img/crests");
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}.jpg`);
  },
});

const upload = multer({ storage });

const { MAPS_API_KEY } = process.env;

teamRouter.get("/", (req, res) => {
  const teamsInfo = searchDB.returnAllTeams();

  if (!teamsInfo) return res.status(404).send();

  res.render("main", {
    layout: "home",
    teamsInfo,
    helpers: {
      isEven,
    },
  });

  return null;
});

teamRouter.get("/backup", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  modifyDB.resetTeamsJson();

  res.status(200).send();
});

teamRouter.get("/create/", (req, res) => {
  const countriesInfo = searchDB.returnAllCountries();

  res.render("create", {
    layout: "home",
    countriesInfo,
  });

  return null;
});

teamRouter.post("/create/", upload.single("crest"), (req, res) => {
  const teamInfo = req.body;

  if (req.file) {
    teamInfo.crestUrl = `crests/${req.file.filename}`;
  }

  if (modifyDB.createTeam(teamInfo) === null) return res.status(404).send();

  return res.status(200).send();
});

teamRouter.get("/:tla", (req, res) => {
  const { tla } = req.params;

  const teamInfo = searchDB.returnTeam(tla);

  if (!teamInfo) return res.status(404).send();

  res.render("view", {
    layout: "home",
    teamInfo,
    MAPS_API_KEY,
  });

  return null;
});

teamRouter.get("/update/:tla", (req, res) => {
  const { tla } = req.params;

  const teamInfo = searchDB.returnTeam(tla);
  const countriesInfo = searchDB.returnAllCountries();

  if (!teamInfo) return res.status(404).send();

  res.render("update", {
    layout: "home",
    teamInfo,
    countriesInfo,
    helpers: {
      sameCountry(country) {
        return country === teamInfo.area.name;
      },
    },
  });

  return null;
});

teamRouter.post("/update/:tla", upload.single("crest"), async (req, res) => {
  const { tla } = req.params;
  const teamInfo = req.body;
  console.log(teamInfo);
  if (req.file !== undefined) {
    teamInfo.crestUrl = `crests/${req.file.filename}`;
  }

  if (modifyDB.updateTeam(tla, teamInfo) === null)
    return res.status(404).send();

  return res.status(200).send();
});

teamRouter.delete("/:tla", (req, res) => {
  const { tla } = req.params;

  if (modifyDB.deleteTeam(tla) === null) return res.status(404).send();

  return res.status(200).send();
});

module.exports = teamRouter;