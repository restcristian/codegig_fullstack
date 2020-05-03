const Sequelize = require("sequelize");

module.exports = new Sequelize("gigdb", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  port: "6543", // database exposed port on docker
});
