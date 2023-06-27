const Area = require('../entities/team-area.entities');
/**
   * @param {Object} newData
   * @param {Object} oldData
   * @returns {Area}
   */
const mapArea = (newData = {}, oldData = {}) => new Area(
  (newData.id || oldData.id || null),
  (newData.name || oldData.name || null),
);

module.exports = mapArea;
