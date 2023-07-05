const Area = require("../entities/team-area.entities");
/**
 * @param {Object} data
 * @returns {Area}
 */
const mapArea = (newData = {}) =>
  new Area(newData.id || null, newData.name || null);

module.exports = mapArea;
