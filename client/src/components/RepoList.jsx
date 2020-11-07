import React from 'react';
// import Repo from './Repo.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    <h5>Top {props.repos.length} repos by date added to database: </h5>
    {/* <ul>
    {props.repos.map((repo, index) => {
      console.log(repo.name);
      <li>{repo.name}</li>
    })}
    </ul> */}
  </div>
)

export default RepoList;