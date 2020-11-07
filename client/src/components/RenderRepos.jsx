import React from 'react';
import RenderRepo from './RenderRepo.jsx';

const RenderRepos = (props) => {

return (
    <ul>
    {props.repos.map((repo, index) =>
      <RenderRepo repo={repo} key={index}/>
    )}
    </ul>
)

}

export default RenderRepos;