import { combineReducers } from 'redux';
import sessionErrorsReducer from './session/session_errors_reducer';
import signUpErrorsReducer from './session/sign_up_errors_reducer';
import photoErrorsReducer from './photos/photo_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  signUp: signUpErrorsReducer,
  photo: photoErrorsReducer
});

export default errorsReducer;
