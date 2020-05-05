const express = require("express");

const app = express();

app.get("/api", (req, res) => {
  res.send("Send an API response");
});

app.listen(8080, () => {
  console.log('Example app listening on port 8080');  
});