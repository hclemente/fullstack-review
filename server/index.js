const express = require('express');
const getRepos = require('../helpers/github.js')
const db = require('../database/index.js')
let app = express();
app.use(express.json());
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.text());
// app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));



app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // console.log('Post request received');
  let username = req.body.searched;
  console.log(username);
  var response = getRepos.getReposByUsername(username);
  console.log(response);
  // .then(save)
  // .catch((err) => {console.log(err)});
  res.json('Success')
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.get25((data)  => {
    res.send(data);
    });

  });

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

