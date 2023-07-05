const path = require('path');
const fs = require('node:fs');
const mapTeamData = require('../mappers/team.mappers');
const { getTeamIndexByTLA } = require('./searchDB.services');

const teamsDir = path.join(__dirname, '../data/teams.json');
const teamsData = JSON.parse(fs.readFileSync(teamsDir));

const teamsBackupDir = path.join(__dirname, '../data/teams-backup.json');
const teamsBackupData = JSON.parse(fs.readFileSync(teamsBackupDir));

const createTeam = (newData) => {
  if (!newData.tla) return null;

  const auxTeamsData = [...teamsData];
  const teamIndex = getTeamIndexByTLA(newData.tla);

  const newTeam = mapTeamData(newData);

  if (teamIndex === null) {
    auxTeamsData.push(newTeam);

    return fs.writeFileSync(teamsDir, JSON.stringify(auxTeamsData));
  }

  auxTeamsData[teamIndex] = newTeam;

  return fs.writeFileSync(teamsDir, JSON.stringify(auxTeamsData));
};

const updateTeam = (tla, newData) => {
  const teamIndex = getTeamIndexByTLA(tla);

  if (teamIndex === null) return null;

  const auxTeamsData = [...teamsData];
  const newTeam = mapTeamData(newData);

  auxTeamsData[teamIndex] = newTeam;

  return fs.writeFileSync(teamsDir, JSON.stringify(auxTeamsData));
};

const deleteTeam = (tla) => {
  const teamIndex = getTeamIndexByTLA(tla);

  if (teamIndex === null) return null;

  const auxTeamsData = [...teamsData];

  auxTeamsData.splice(teamIndex, 1);

  return fs.writeFileSync(teamsDir, JSON.stringify(auxTeamsData));
};

const resetUploadedImages = () => {
  const dirPath = path.join(__dirname, '../../public/img/crests');
  fs.rmSync(dirPath, { recursive: true, force: true });

  fs.mkdirSync(dirPath);
};

const resetTeamsJson = () => fs.writeFileSync(teamsDir, JSON.stringify(teamsBackupData));

module.exports = {
  createTeam, updateTeam, deleteTeam, resetTeamsJson, resetUploadedImages,
};