const { defineConfig } = require("cypress");
require("dotenv").config();

const { PORT } = process.env;

module.exports = defineConfig({
  e2e: {
    baseUrl: `http://localhost:${PORT}`,
  },
});
