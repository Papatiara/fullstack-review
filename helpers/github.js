const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js')


let getReposByUsername = (user)  =>  {
  const options = {  
    url: `https://api.github.com/users/${user}/repos`,
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
};
  request(options, function(err, res, body) {  
    if (err) {
      res.status(500).send()
    } else {
      console.log(body)
      var parse = JSON.parse(body)
      var obj = {
      RepoName: parse[0].name,
      user: parse[0].owner.login,
      forks: parse[0].forks,
      url: parse[0].html_url
   }
    db.save(obj)
  }
});
} 

let retrieveData = (callback) => {
  db.find(function(data){
    callback(null, data)
  })
}

module.exports.getReposByUsername = getReposByUsername;
module.exports.retrieveData = retrieveData;