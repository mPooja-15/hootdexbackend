const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root", 
  password: "1234",
  database: "hootdex",
});

app.post("/register",  (req, res) => {
  let data = {firstName: req.body.firstName, lastName: req.body.lastName,  city: req.body.city };
  let sql = "INSERT INTO users SET ?";
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify({msg:"registration successfully"}));
  });
});


db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(3001, () => {
  console.log("port running");
});