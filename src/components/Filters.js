import React from 'react';
import FilterLink from './FilterLink';

export default function Filters(props) {
  return (
    <div>
      <FilterLink filter="ALL"
        handleFilterClick={props.handleFilterClick} />
      <FilterLink filter="COMPLETE"
        handleFilterClick={props.handleFilterClick} />
      <FilterLink filter="INCOMPLETE"
        handleFilterClick={props.handleFilterClick} />
    </div>
  );
};
