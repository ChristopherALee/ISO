import { combineReducers } from 'redux';
import userReducer from './user/user_reducer';
import photosReducer from './photos/photos_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  photos: photosReducer
});

export default entitiesReducer;
