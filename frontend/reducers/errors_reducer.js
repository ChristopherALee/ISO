import { combineReducers } from 'redux';
import sessionErrorsReducer from './session/sessionErrorsReducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
});

export default errorsReducer;
