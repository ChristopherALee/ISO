import { combineReducers } from 'redux';
import sessionReducer from './session/session_reducer';
import errorsReducer from './errors_reducer';
import photosReducer from './photos/photos_reducer';
import userReducer from './user/user_reducer';
import entitiesReducer from './entities_reducer';
import loadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  loading: loadingReducer,
  errors: errorsReducer,
});

export default rootReducer;
