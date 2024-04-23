import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.use(routes);

export default app;
const Sequelize = require('sequelize');
const sequelize = new Sequelize('XM_bakeries', 'root', null, {
    host: 'localhost',
    dialect: 'mysql'
  });
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });