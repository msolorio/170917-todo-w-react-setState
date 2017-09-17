import React, { Component } from 'react';
import Form from './Form';
// import Filters from './Filters';
import List from './List';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      todos: [],
      nextToDoId: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  };

  handleInputChange(e) {
    this.setState({inputVal: e.target.value});
  };

  handleFormSubmit(e) {
    e.preventDefault();

    console.log('in handleFormSubmit');
    const newTodo = {
      todoText: this.state.inputVal,
      todoId: this.state.nextToDoId,
      completed: false
    };

    this.setState((prevState) => ({
      todos: prevState.todos.concat(newTodo),
      inputVal: '',
      nextToDoId: prevState.nextToDoId + 1
    }));

  }

  handleTodoClick(todoId) {

    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.todoId === todoId) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        } else {
          return todo;
        }
      });

      return {
        todos: updatedTodos
      }
    });
  }

  handleRemoveTodo(todoId) {
    console.log('in removeTdo');
    console.log('todoId:', todoId);
    console.log('this:', this);

    this.setState((prevState) => {
      const updatedTodos = prevState.todos.filter((todo) => {
        return todo.todoId !== todoId
      });

      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Form handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          inputVal={this.state.inputVal} />
        <List todos={this.state.todos}
          handleTodoClick={this.handleTodoClick}
          handleRemoveTodo={this.handleRemoveTodo} />
      </div>
    );
  }
}

export default App;
