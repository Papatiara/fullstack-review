const express = require('express');
let app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
// var dataBase = require(save);

app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  console.log(req.body)
  res.send('here')
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

