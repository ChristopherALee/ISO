import {
  RECEIVE_ALL_USERS,
  RECEIVE_SINGLE_USER } from '../../actions/user/user_actions';
import {
  RECEIVE_SINGLE_PHOTO,
  RECEIVE_SHOW_PHOTO,
  REMOVE_PHOTO } from '../../actions/photos/photo_actions';
import { LOG_OUT } from '../../actions/session/session_actions';

const userReducer = (state = {}, action) => {
  let newState;
  let authorName;

  switch (action.type) {
    case RECEIVE_ALL_USERS:
      newState = Object.assign({}, state, action.users);
      return newState;
    case RECEIVE_SINGLE_USER:
      newState = Object.assign({}, state, {[action.user.username]: action.user});
      return newState;
    case RECEIVE_SINGLE_PHOTO:
      authorName = action.photo.photo.authorName;
      newState = Object.assign({}, state);
      newState[authorName].photoIds.push(action.photo.photo.id);
      return newState;
    case REMOVE_PHOTO:
      authorName = action.photo.photo.authorName;
      newState = Object.assign({}, state);
      newState[authorName].photoIds = newState[authorName].photoIds.filter( (id) => id !== action.photo.photo.id );
      return newState;
    case LOG_OUT:
      newState = {};
      return newState;
    default:
      return state;
  }
};

export default userReducer;
