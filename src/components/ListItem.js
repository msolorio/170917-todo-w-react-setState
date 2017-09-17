import React from 'react';

export default function ListItem(props) {
  return (
    <li onClick={props.handleTodoClick}
      style={{textDecoration: props.completed ? 'line-through' : 'none'}}>
      {props.todoText}
    </li>
  );
};
