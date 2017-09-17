import React, { Component } from 'react';
import Form from './Form';
import Filters from './Filters';
import List from './List';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      todos: [],
      nextToDoId: 0,
      currentFilter: 'ALL'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
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

    this.setState((prevState) => {
      const updatedTodos = prevState.todos.filter((todo) => {
        return todo.todoId !== todoId
      });

      return {
        todos: updatedTodos
      };
    });
  }

  handleFilterClick(filter) {
    this.setState({currentFilter: filter});
  }

  getTodos(filter) {
    switch(filter) {
      case 'ALL':
        return this.state.todos;
      case 'COMPLETE':
        return this.state.todos.filter((todo) => {
          return todo.completed === true
        });
      case 'INCOMPLETE':
        return this.state.todos.filter((todo) => {
          return todo.completed === false
        });
      default:
        return this.state.todos;
    }
  }

  render() {
    return (
      <div className="App">
        <Form handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          inputVal={this.state.inputVal} />
        <Filters handleFilterClick={this.handleFilterClick} />
        <List todos={this.getTodos(this.state.currentFilter)}
          handleTodoClick={this.handleTodoClick}
          handleRemoveTodo={this.handleRemoveTodo} />
      </div>
    );
  }
}

export default App;
