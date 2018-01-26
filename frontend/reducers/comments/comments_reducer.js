import {
  RECEIVE_SINGLE_COMMENT,
  REMOVE_COMMENT } from '../../actions/comments/comment_actions';
import { RECEIVE_SHOW_PHOTO } from '../../actions/photos/photo_actions';
import { LOG_OUT } from '../../actions/session/session_actions';

const commentReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_COMMENT:
      // let nextIdxInState = Object.values(state).length;
      // let idxOfNewCommentInAction = Object.values(action.comment.comments).length - 1;
      // let newComment = action.comment.comments[idxOfNewCommentInAction];
      // newState = Object.assign({}, state, {[nextIdxInState]: newComment});
      newState = Object.assign({}, state, {[action.comment.comments[action.comment.comments.length - 1].id]: action.comment.comments[action.comment.comments.length - 1]});
      return newState;
    case RECEIVE_SHOW_PHOTO:
      newState = Object.assign({}, state, action.photo.comments);
      return newState;
    case REMOVE_COMMENT:
      newState = Object.assign({}, state);
      newState = Object.values(newState).filter(
        (comment) => action.comment.includes(comment.id)
      );
      return newState;
    case LOG_OUT:
      newState = {};
      return newState;
    default:
      return state;
  }
};

export default commentReducer;
