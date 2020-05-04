import { Sequelize } from "sequelize";

const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD, DB_PORT } = process.env;

export default new Sequelize(
  DB_NAME as string,
  DB_USER as string,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: "postgres",
    port: +(DB_PORT as string), // database exposed port on docker
  }
);
