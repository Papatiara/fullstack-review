const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  full_name: String,
});


var Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {
  var myData = new Repo(data);
    myData.save()
      .then(item => {
        //  res.send("item saved to database");
    })
      .catch(err => {
        // res.status(400).send("unable to save to database");
      });
  
}

module.exports.save = save;