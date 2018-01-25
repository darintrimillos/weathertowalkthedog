const express = require('express');
const proxy = require('http-proxy-middleware');

const weather = process.env.DARK_SKY;
const port = process.env.PORT || 3000;

const app = express();

// proxy middleware options
const options = {
    target: 'https://api.darksky.net', // target host
    changeOrigin: true,               // needed for virtual hosted sites
    ws: true,                         // proxy websockets
    pathRewrite: {
        '^/api/weather' : '/forecast/' + weather,     // rewrite path
        //'^/api/remove/path' : '/path'           // remove base path
    },
    router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        'dev.localhost:3000' : 'http://localhost:8000'
    }
};

const darkSkyProxy = proxy(options);

app.use(express.static('dist'));
app.use('/api', darkSkyProxy);

app.listen(port, function() {
    console.log('Example app listening on port', port);
})