import React from 'react';

export default function Form(props) {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <label>
        Enter a Todo Item:&nbsp;
        <input placeholder="clean the fish bowl"
          onChange={props.handleInputChange}
          value={props.inputVal} />
      </label>
      <button type="submit">Add a Todo</button>
    </form>
  );
};
