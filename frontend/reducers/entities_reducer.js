import { combineReducers } from 'redux';
import userReducer from './user/user_reducer';
import photosReducer from './photos/photos_reducer';
import commentReducer from './comments/comments_reducer';

const entitiesReducer = combineReducers({
  users: userReducer,
  photos: photosReducer,
  comments: commentReducer
});

export default entitiesReducer;
