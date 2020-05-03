import { Sequelize } from "sequelize";

export default new Sequelize("gigdb", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
  port: 6543, // database exposed port on docker
});
