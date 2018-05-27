const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  RepoName: {type: String},
  user: { type : String , unique : true, dropDups: true
  },
  forks: {type: Number},
  url: {type: String} 
});

var Repo = mongoose.model('Repo', repoSchema);

var result = []
let save = (data) => {
  var myData = new Repo(data);
  if (!result.includes(myData.user)) {
    myData.save()
      .then(item => {
        console.log('item saved on database')
      })
      .catch(err => {
        console.log('error saving on database')
      });
    } else {
      result.push(myData.user)
    }
}

let find = (callback) =>  {
  Repo.find({}, function(err, data) { 
    if (err) {
      console.log(err)
    } else {
      callback(data);
    }    
  });
}
module.exports.save = save;
module.exports.find = find;

