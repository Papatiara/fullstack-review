const request = require('request');
const config = require('../config.js');
const db = require('../database/index.js')

let getReposByUsername = (user) => {
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
    if(err) {
      console.log(err)
    } else {
      var parse = JSON.parse(body)
      var obj = {
      id: parse[0].id,
      name: parse[0].name,
      full_name: parse[0].full_name,
    }
    console.log(obj)

      db.save(obj)
    }
});

}

module.exports.getReposByUsername = getReposByUsername;