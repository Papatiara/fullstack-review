const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js')


let getReposByUsername = (user)  =>  {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
 
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
      console.log(err)
    } else {
      console.log(body)
      var parse = JSON.parse(body)
      var obj = {
      RepoName: parse[0].name,
      user: parse[0].owner.login,
      forks: parse[0].forks,
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