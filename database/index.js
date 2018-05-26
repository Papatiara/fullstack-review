const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  RepoName: String,
  user: String,
  forks: Number,
});

var Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  console.log('new data' , data)
  var myData = new Repo(data);
    myData.save()
      .then(item => {
    })
      .catch(err => {
      });
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

