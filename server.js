const mysql = require("mysql2");
const express = require("express");
const PORT = process.emitWarning.PORT || 3001;
const app = express();
//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "Pilgore1!",
    database: "election",
  },
  console.log("connected to the election database.")
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

//default response for any other request
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
