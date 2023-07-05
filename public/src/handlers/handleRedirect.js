/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/**
* @param {String} path
*/
const redirect = (path) => {
  location.href = `http://localhost:${PORT}${path}`;
};
