import React from 'react';

export default function ListItem(props) {
  return (
    <li>
      <div onClick={props.handleRemoveTodo}>X</div>
      <p onClick={props.handleTodoClick}
        style={{textDecoration: props.completed ? 'line-through' : 'none'}}>
        {props.todoText}
      </p>
    </li>
  );
};
