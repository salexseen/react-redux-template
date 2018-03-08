import React from 'react';

export default class Todo extends React.Component {
  render(){
    return (
      <ul>
        {this.props.todos.map(todo => {
          return <li key={todo.id}>{todo.name}</li>;
        })}
      </ul>
    );
  }
}
