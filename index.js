const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// console.log('environment variable:')
app.get('/', function(req, res) {
    res.send('Hello Darin!');
});

app.listen(port, function() {
    console.log('Example app listening on port whatever!');
})