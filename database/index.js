const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  // _id = mongoose.Schema.Types.ObjectId,
  repo_id: {type: Number, unique: true},
  // repo_id: Number,
  name: String,
  owner: {
    login: String,
    ownerid: Number,
    html_url: String
  },
  description: String,
  created_at: String,
  html_url: String

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (reposArray) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  for (let i = 0; i< reposArray.length; i++) {
    let oneRepo = new Repo({
      // _id: mongoose.Types.ObjectId(),
      repo_id: reposArray[i].id,
      name: reposArray[i].name,
      owner: {
        login: reposArray[i].owner.login,
        ownerid: reposArray[i].owner.id,
        html_url: reposArray[i].owner.html_url
      },
      description: reposArray[i].description,
      created_at: reposArray[i].created_at,
      html_url: reposArray[i].html_url
    });
  //   oneRepo.save((err, result) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log("success")
  //   }
  // })
    oneRepo.save()
    .then((result)=>console.log(`Saved document: ${reposArray[i].name}`))
    .catch((err)=>console.log('Error saving', err));
  }

}

let get25 = (callback) => {
  Repo.find( (err, repos) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(repos.length);
      let top25 = repos.slice(repos.length - 25);
      // console.log(top25.length)
      callback(top25);
    }
  });

}


module.exports = {
  save: save,
  get25: get25
};