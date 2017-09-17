import React from 'react';
import ListItem from './ListItem';

export default function List(props) {

  const list = props.todos.map((todo, index) => {
    return (
      <ListItem todoText={todo.todoText}
        completed={todo.completed}
        key={index}
        handleTodoClick={() => props.handleTodoClick(todo.todoId)}
        handleRemoveTodo={() => props.handleRemoveTodo(todo.todoId)} />
    );
  });

  return <ul>{list}</ul>;
}
