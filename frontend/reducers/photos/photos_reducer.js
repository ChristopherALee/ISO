import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_SINGLE_PHOTO,
  RECEIVE_SHOW_PHOTO,
  REMOVE_PHOTO } from '../../actions/photos/photo_actions';

const photosReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      newState = Object.assign({}, state, action.photos);
      return newState;
    case RECEIVE_SINGLE_PHOTO:
      newState = Object.assign({}, state, {[action.photo.id]: action.photo});
      return newState;
    case RECEIVE_SHOW_PHOTO:
      newState = Object.assign({}, state, {[action.photo.id]: action.photo});
      return newState;
    case REMOVE_PHOTO:
      newState = Object.assign({}, state);
      delete newState[action.photoId];
      return newState;
    default:
      return state;
  }
};

export default photosReducer;
