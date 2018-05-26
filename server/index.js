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
  // console.log('heeeeeeeeeeeeeeeeeeere', req.body.user)
  res.send('here')
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

});


app.get('/repos', function (req, res) {
  // console.log('heeeeeeeeeeeeeeeeeeeere',helper.retrieveData())
  // var result = [];
  helper.retrieveData(function(err, data) {
    if (err) {
      console.log(err)
    } else {
      // result.push(JSON.stringify(data))
      console.log('got the data' , data)
      res.send(data)
    }
  })
  // res.send(result)
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

