import React from 'react';
import { connect } from 'react-redux';
import TodoComponent from '../components/Todo';

function mapStateToProps(state){
  return {
    todos: state.todo
  };
}

export default connect(mapStateToProps)(TodoComponent);