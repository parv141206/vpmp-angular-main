const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "angular-data",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database!");
});

app.post("/saveUserData", (req, res) => {
  const { username, password } = req.body;
  const sql = "INSERT INTO userdata (username, password) VALUES (?, ?)";
  connection.query(sql, [username, password], (err, result) => {
    if (err) throw err;
    res.send("User data saved successfully!");
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
