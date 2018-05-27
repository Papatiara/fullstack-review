const express = require('express');
let app = express();
var bodyParser = require('body-parser');
const request = require('request');
var helper = require('../helpers/github.js')
const db = require('../database/index.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())



app.post('/repos', function (req, res) {
  helper.getReposByUsername(req.body.user)
  res.send('here')
});


app.get('/repos', function (req, res) {
  helper.retrieveData(function(err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log('got the data' , data)
      res.send(data)
    }
  })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

