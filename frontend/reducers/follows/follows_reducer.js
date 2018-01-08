import {
  RECEIVE_ALL_FOLLOWS,
  RECEIVE_SINGLE_FOLLOW,
  REMOVE_FOLLOW } from '../../actions/follows/follow_actions';

const followsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_FOLLOWS:

    return newState;
    case RECEIVE_SINGLE_FOLLOW:

    return newState;
    case REMOVE_FOLLOW:

    return newState;
    default:
      return state;
  }
};

export default followsReducer;
