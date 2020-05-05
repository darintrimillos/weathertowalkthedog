const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const dummy = fs.readFileSync(path.resolve('./proxy/example.json'));

if (process.env.NODE_ENV === 'dev') {
  console.log('dev environment!');
}

app.get("/api", (req, res) => {
  res.send("Send an API response");
});

app.listen(8080, () => {
  console.log('Example app listening on port 8080', process.env.NODE_ENV);  
});