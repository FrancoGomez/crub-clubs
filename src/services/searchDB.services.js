const path = require('path');
const fs = require('node:fs');

const teamDir = path.join(__dirname, '../data/teams.json');
const teamsData = JSON.parse(fs.readFileSync(teamDir));

const countriesDir = path.join(__dirname, '../data/countries.json');
const countriesData = JSON.parse(fs.readFileSync(countriesDir));

const getTeamIndexByTLA = (tla) => {
  for (let index = 0; index < teamsData.length; index += 1) {
    const team = teamsData[index];

    if (team.tla === tla.toUpperCase()) return index;
  }

  return null;
};

const returnAllTeams = () => teamsData;

const returnTeam = (tla) => {
  const teamIndex = getTeamIndexByTLA(tla);

  return teamsData[teamIndex];
};

const returnAllCountries = () => countriesData;

module.exports = {
  returnAllTeams, getTeamIndexByTLA, returnTeam, returnAllCountries,
};