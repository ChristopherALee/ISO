import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../../actions/session/session_actions';

const sessionErrorsReducer = (state = { errors: [] }, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      newState = Object.assign({}, state, action.errors);
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = { errors: [] };
      return newState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
