import * as CommentsApiUtil from '../../util/comments/comments_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveAllComments = (comments) => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments: comments
  };
};

const receiveSingleComment = (comment) => {
  return {
    type: RECEIVE_SINGLE_COMMENT,
    comment: comment
  };
};

const removeComment = (comment) => {
  return {
    type: REMOVE_COMMENT,
    comment: comment
  };
};

const receiveCommentErrors = (errors) => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors: errors
  };
};

export const fetchAllComments = () => dispatch => {
  return (
    CommentsApiUtil.fetchAllComments().then(
      (comments) => {
        dispatch(receiveAllComments(comments));
        return comments;
      }
    )
  );
};

export const createComment = (comment) => dispatch => {
  return (
    CommentsApiUtil.createComment(comment).then(
      (comment) => {
        dispatch(receiveSingleComment(comment));
        return comment;
      }
    ).fail(
      (errors) => {
        dispatch(receiveCommentErrors(errors));
        return errors;
      }
    )
  );
};

export const updateComment = (comment) => dispatch => {
  return (
    CommentsApiUtil.updateComment(comment).then(
      (comment) => {
        dispatch(receiveSingleComment(comment));
        return comment;
      }
    ).fail(
      (errors) => {
        dispatch(receiveCommentErrors(errors));
        return errors;
      }
    )
  );
};

export const deleteComment = (commentId) => dispatch => {
  return (
    CommentsApiUtil.deleteComment(commentId).then(
      (comment) => {
        dispatch(removeComment(comment));
        return comment;
      }
    )
  );
};
