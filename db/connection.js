const { MODULEDECLARATION_TYPES } = require("@babel/types");
const mysql = require("mysql2");

//connect to database
const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "Pilgore1!",
      database: "election",
    });

    module.exports = db;