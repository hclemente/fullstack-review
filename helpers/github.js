const axios = require('axios');
const config = require('../config.js');
const db = require('../database/index.js');

let getReposByUsername = (username) => {
    // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `/repos`,
    baseURL: `https://api.github.com/users/${username}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  axios.get('/repos', options)
  .then((response) => {
    // console.log(response.data);
    db.save(response.data);
  })
  .catch((err) => console.log('Error in getReposByUsername', err));


}
// getReposByUsername('octocat');

module.exports.getReposByUsername = getReposByUsername;