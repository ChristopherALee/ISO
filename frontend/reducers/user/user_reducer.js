import {
  RECEIVE_ALL_USERS,
  RECEIVE_SINGLE_USER } from '../../actions/user/user_actions';
import {
  RECEIVE_SINGLE_FOLLOW,
  REMOVE_FOLLOW } from '../../actions/follows/follow_actions';

const userReducer = (state = {}, action) => {
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      newState = Object.assign({}, state, action.users);
      return newState;
    case RECEIVE_SINGLE_USER:
      newState = Object.assign({}, state, {[action.user.username]: action.user});
      return newState;
    case RECEIVE_SINGLE_FOLLOW:
      // let username = state.
      // newState = Object.assign({}, state,)
    default:
      return state;
  }
};

export default userReducer;
