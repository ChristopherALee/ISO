import { START_LOADING_UPLOAD } from '../actions/photos/photo_actions';

const loadingReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case START_LOADING_UPLOAD:
      newState = Object.assign({}, state, { uploadLoading: true });
      return newState;
    default:
      return state;
  }
};

export default loadingReducer;
