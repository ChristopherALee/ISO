import { RECEIVE_PHOTO_ERRORS } from '../../actions/photos/photo_actions';

const photoErrorsReducer = (state = { errors: [] }, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PHOTO_ERRORS:
      newState = Object.assign({}, state, action.errors);
      return newState;
    default:
      return state;
  }
};

export default photoErrorsReducer;
