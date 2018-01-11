import {
  RECEIVE_ALL_PHOTOS,
  RECEIVE_SINGLE_PHOTO,
  RECEIVE_SHOW_PHOTO,
  REMOVE_PHOTO } from '../../actions/photos/photo_actions';
import {
  RECEIVE_SINGLE_COMMENT,
  REMOVE_COMMENT } from '../../actions/comments/comment_actions';

const photosReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);

  let photoId;

  switch (action.type) {
    case RECEIVE_ALL_PHOTOS:
      newState = Object.assign({}, state, action.photos);
      return newState;
    case RECEIVE_SINGLE_PHOTO:
      newState = Object.assign({}, state, {[action.photo.id]: action.photo});
      return newState;
    case RECEIVE_SHOW_PHOTO:
      newState = Object.assign({}, state, {[action.photo.id]: action.photo});
      return newState;
    case REMOVE_PHOTO:
      newState = Object.assign({}, state);
      delete newState[action.photoId];
      return newState;
    case RECEIVE_SINGLE_COMMENT:
      photoId = action.comment.photo_id;
      newState = Object.assign({}, state);
      newState[photoId].comment_ids.push(action.comment.id);
      newState[photoId].comments.push(action.comment.body);
      return newState;
    case REMOVE_COMMENT:
      photoId = action.comment.photo_id;
      newState = Object.assign({}, state);

      let newCommentIds = [];
      newState[photoId].comment_ids.each ( (commentId) => {
        if (action.comment.id !== commentId) {
          newCommentIds.push(commentId);
        }
      });
      newState[photoId].comment_ids = newCommentIds;

      let newComments = [];
      newState[photoId].comments.each( (comment) => {
        if (action.comment.body !== comment) {
          newComments.push(comment);
        }
      });
      newState[photoId].comments = newComments;

      return newState;
    default:
      return state;
  }
};

export default photosReducer;
