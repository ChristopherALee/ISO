import { RECEIVE_CURRENT_USER } from '../../actions/session/session_actions';

const sessionReducer = (state = {currentUser: null}, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state, {currentUser: action.currentUser});
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
