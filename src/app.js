const express = require("express");
const mysql = require("mysql");
const router = require("./routes/routes");

const app = express();

//Middlewares

app.use(express.json());
app.use("/api/v1/xm", router);

//db connection

const conn = mysql.createConnection({
  host: "localhost",
  database: "XM_bakeries",
  user: "root",
});

const connection = () => {
  return new Promise((resolve, reject) => {
    conn.connect((err) => {
      if (err) {
        reject(`Unable to connect to the database: ${err}`);
      } else {
        console.log("Database Connection has been established successfully.");
        resolve();
      }
    });
  });
};

module.exports = { connection, app };
