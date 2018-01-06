import { combineReducers } from 'redux';
import sessionReducer from './session/session_reducer';
import errorsReducer from './errors_reducer';
import photosReducer from './photos/photos_reducer';
import userReducer from './user/user_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  photos: photosReducer,
  users: userReducer,
});

export default rootReducer;
