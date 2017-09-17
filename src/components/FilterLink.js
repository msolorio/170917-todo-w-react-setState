import React from 'react';

export default function FilterLink(props) {
  return (
    <span onClick={() => props.handleFilterClick(props.filter)}>
      <a href="#">{props.filter}</a>
      &nbsp;
    </span>
  )
};
