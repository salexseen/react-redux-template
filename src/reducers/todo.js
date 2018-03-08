import { ADD_TODO, REMOVE_TODO } from '../constants/Todo';

const initialState = [
  { id: 0, name: 'Todo 1' },
  { id: 1, name: 'Todo 2' },
  { id: 2, name: 'Todo 3' }
];

export default function(state = initialState, action){
  switch(action.type){
    case ADD_TODO:
      break;
    case REMOVE_TODO:
      break;
    default:
      return state;
  }
};