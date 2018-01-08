import {
  RECEIVE_ALL_FOLLOWS,
  RECEIVE_SINGLE_FOLLOW,
  REMOVE_FOLLOW } from '../../actions/follows/follow_actions';
// import { RECEIVE_SINGLE_USER } from '../../actions/user/user_actions';

const followsReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_FOLLOWS:
      newState = Object.assign({}, state, action.follows);
      return newState;
    case RECEIVE_SINGLE_FOLLOW:
      newState = Object.assign({}, state, {[action.follow.id]: action.follow});
      return newState;
    default:
      return state;
  }
};

export default followsReducer;
