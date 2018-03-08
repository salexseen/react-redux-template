import { ADD_TODO, REMOVE_TODO } from '../constants/Todo';

export function addTodo(payload){
  return {
    type: ADD_TODO,
    payload: payload
  };
}

export function removeTodo(payload){
  return {
    type: REMOVE_TODO,
    payload: payload
  };
}