// server.js
// where your node app starts
const os = require('os')
// init project
require('dotenv').config();
var express = require('express');
var app = express();
const whoami = require('./controller/whoami')

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
  console.log(req.headers)
  
});

app.get('/api/whoami', whoami)



// listen for requests :)
var listener = app.listen(5000, () => console.log('app is listening on port 5000...'))
