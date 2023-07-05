const mapArea = require("../mappers/area.mappers");

class Team {
  /**
   * @param {Number} id
   * @param {Number} areaId
   * @param {String} areaName
   * @param {String} name
   * @param {String} shortName
   * @param {String} tla
   * @param {String} crestUrl
   * @param {String} address
   * @param {String} phone
   * @param {String} website
   * @param {String} email
   * @param {String} founded
   * @param {String} clubColors
   * @param {String} venue
   */
  constructor(
    id,
    newAreaData,
    name,
    shortName,
    tla,
    crestUrl,
    address,
    phone,
    website,
    email,
    founded,
    clubColors,
    venue
  ) {
    this.id = id;
    this.area = mapArea(newAreaData);
    this.name = name;
    this.shortName = shortName;
    this.tla = tla;
    this.crestUrl = crestUrl;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.email = email;
    this.founded = founded;
    this.clubColors = clubColors;
    this.venue = venue;
    this.lastUpdated = new Date();
  }
}

module.exports = Team;
