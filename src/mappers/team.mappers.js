const Team = require("../entities/team.entities");
/**
 * @param {Object} data
 * @returns {Team}
 */
const mapTeamData = (data) =>
  new Team(
    data.id || null,
    {
      id: data.id || null,
      name: data.area || null,
    },
    data.name || null,
    data.shortName || null,
    data.tla.toUpperCase() || null,
    data.crestUrl || null,
    data.address || null,
    data.phone || null,
    data.website || null,
    data.email || null,
    data.founded || null,
    data.clubColors || null,
    data.venue || null
  );

module.exports = mapTeamData;
