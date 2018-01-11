import {
  START_LOADING_UPLOAD,
  RECEIVE_SINGLE_PHOTO,
  RECEIVE_PHOTO_ERRORS } from '../actions/photos/photo_actions';

const loadingReducer = (state = { uploadLoading: false }, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case START_LOADING_UPLOAD:
      newState = Object.assign({}, state, { uploadLoading: true });
      return newState;
    case RECEIVE_SINGLE_PHOTO:
      newState = Object.assign({}, state, { uploadLoading: false });
      return newState;
    case RECEIVE_PHOTO_ERRORS:
      newState = Object.assign({}, state, { uploadLoading: false });
      return newState;
    default:
      return state;
  }
};

export default loadingReducer;
