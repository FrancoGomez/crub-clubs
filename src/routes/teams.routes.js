const { Router } = require('express');
const { returnAllTeams, returnTeam } = require('../services/searchDB.services');
const {
  putTeam, patchTeam, deleteTeam, resetTeamsJson,
} = require('../services/modifyDB.services');

const teamRouter = Router();

teamRouter.get('/', (req, res) => {
  const teamsInfo = returnAllTeams();

  if (!teamsInfo) return res.status(404).send();

  return res.status(200).send(teamsInfo);
});

teamRouter.get('/backup', (req, res) => res.status(200).send(resetTeamsJson()));

teamRouter.put('/', (req, res) => {
  const teamInfo = req.body;

  if (putTeam(teamInfo) === null) return res.status(404).send();

  return res.status(200).send();
});

teamRouter.get('/:tla', (req, res) => {
  const { tla } = req.params;

  const team = returnTeam(tla);

  if (!team) return res.status(404).send();

  return res.status(200).send(team);
});

teamRouter.patch('/:tla', (req, res) => {
  const { tla } = req.params;
  const teamInfo = req.body;

  if (patchTeam(tla, teamInfo) === null) return res.status(404).send();

  return res.status(200).send();
});

teamRouter.delete('/:tla', (req, res) => {
  const { tla } = req.params;

  if (deleteTeam(tla) === null) return res.status(404).send();

  return res.status(200).send();
});

module.exports = teamRouter;
