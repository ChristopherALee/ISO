import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_SINGLE_PHOTO,
  RECEIVE_SHOW_PHOTO,
  REMOVE_PHOTO } from '../../actions/photos/photo_actions';
import { LOG_OUT } from '../../actions/session/session_actions';

const photosReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);


  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      debugger
      newState = Object.assign({}, state, action.photos);
      return newState;
    case RECEIVE_SINGLE_PHOTO:
      newState = Object.assign({}, state, {[action.photo.photo.id]: action.photo.photo});
      return newState;
    case RECEIVE_SHOW_PHOTO:
      newState = Object.assign({}, state, {[action.photo.photo.id]: action.photo.photo});
      return newState;
    case REMOVE_PHOTO:
      debugger
      newState = Object.assign({}, state);
      delete newState[action.photo.photo.id];
      return newState;
    case LOG_OUT:
      newState = {};
      return newState;
    default:
      return state;
  }
};

export default photosReducer;
