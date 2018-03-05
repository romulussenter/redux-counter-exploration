import * as types from './types';

//inital state
const initalState = 0;
//reducer how state changes
const countReducer = (state= initalState, action) => {
  switch(action.type){
    case types.INCREMENT:
    return state + 1;
  case types.DECREMENT:
   return state - 1;
  default:
  return state 
  }
};

export default countReducer;