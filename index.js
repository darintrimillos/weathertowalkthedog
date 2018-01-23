const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// console.log('environment variable:')
// app.get('/', function(req, res) {
//     res.send('Hello Darin!');
// });

app.use(express.static('dist'));
// app.use(express.static(__dirname));
// app.use('/api', darkSkyProxy);

app.listen(port, function() {
    console.log('Example app listening on port whatever!');
})