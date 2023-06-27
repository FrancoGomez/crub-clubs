const Team = require('../entities/team.entities');
/**
   * @param {Object} newData
   * @param {Object} oldData
   * @returns {Team}
   */
const mapTeamData = (newData, oldData = {}) => new Team(
  (newData.id || oldData.id || null),
  newData.area,
  oldData.area,
  (newData.name || oldData.name || null),
  (newData.shortName || oldData.shortName || null),
  (newData.tla || oldData.tla || null),
  (newData.crestUrl || oldData.crestUrl || null),
  (newData.address || oldData.address || null),
  (newData.phone || oldData.phone || null),
  (newData.website || oldData.website || null),
  (newData.email || oldData.email || null),
  (newData.founded || oldData.founded || null),
  (newData.clubColors || oldData.clubColors || null),
  (newData.venue || oldData.venue || null),
);

module.exports = mapTeamData;
