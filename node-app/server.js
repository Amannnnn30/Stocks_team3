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
  password: "AmanKumar9869151164!",
  database: "Stocks",
});

con.connect((err) => {
  if (err) throw err;
  console.log("MYsql Connected!!!");
});

app.post("/submit-name", (req, res) => {
  let data = { yourname: req.body.yourname };
  let sqlInsert = "INSERT INTO stocklist SET ?";
  let query = con.query(sqlInsert, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, reponse: results }));
  });
});

app.listen(3003, () => {
  console.log(" Server is running on 3003");
});

app.get("/stocklist",(req,res)=> {
  let sqlquery="SELECT * FROM stocklist";
  con.query(sqlquery,function(err,result){
    if(err) throw err;
    console.log(result);
    res.send(result);
})
})

app.post("/add-new-stock", (req, res) => {
  let data = { sname: req.body.sName, price: req.body.sPrice, id: 4};
  console.log(data,"server");
  let sqlInsert = "INSERT INTO stocklist SET ?";
  let query = con.query(sqlInsert, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, reponse: results }));
  });
});