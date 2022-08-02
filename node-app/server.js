const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "",
});

con.connect((err) => {
  if (err) throw err;
  console.log("MYsql Connected!!!");
});

app.post("/submit-name", (req, res) => {
  let data = { yourname: req.body.yourname };
  let sqlInsert = "INSERT INTO <tablename> SET ?";
  let query = con.query(sqlInsert, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, reponse: results }));
  });
});

app.listen(3001, () => {
  console.log(" Server is running on 3001");
});