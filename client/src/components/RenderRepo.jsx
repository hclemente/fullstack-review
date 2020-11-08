import React from 'react';

const RenderRepo = (props) => {

  return <li><a href={props.repo.html_url}>{props.repo.name}</a></li>

  // return <li href={props.repo.html_url}>{props.repo.name}</li>
}

export default RenderRepo;