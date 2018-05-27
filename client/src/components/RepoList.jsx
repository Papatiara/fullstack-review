import React from 'react';

const RepoList = (props) => (
  <div>
    <h5>{props.elem}</h5>
    <a href={props.url}>Repo Link</a>
  </div>
)

export default RepoList;