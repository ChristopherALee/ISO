import { combineReducers } from 'redux';
import userReducer from './user/user_reducer';
import photosReducer from './photos/photos_reducer';
import followsReducer from './follows/follows_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  photos: photosReducer,
  follows: followsReducer,
});

export default entitiesReducer;
