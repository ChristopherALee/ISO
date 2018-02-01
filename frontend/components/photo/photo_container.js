import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Photo from './photo';
import { fetchShowPhoto, deletePhoto } from '../../actions/photos/photo_actions';
import { fetchSingleUser } from '../../actions/user/user_actions';
import {
  createFollow,
  deleteFollow } from '../../actions/follows/follow_actions';
import {
  createComment,
  updateComment,
  deleteComment } from '../../actions/comments/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let currentPhoto = state.entities.photos[ownProps.match.params.photoId];
  let sessionUser = state.session.currentUser ? state.session.currentUser.username : null;
  let currentUser = state.entities.users[sessionUser];

  let photoComments;

  if (
    currentPhoto &&
    Object.values(state.entities.comments).length && Object.values(state.entities.comments).every( (comment) => comment !== undefined )) {
    photoComments = Object.values(state.entities.comments).filter( (comment) => comment.photoId === currentPhoto.id);
  }

  return {
    currentPhoto: currentPhoto,
    currentUser: currentUser,
    sessionUser: sessionUser,
    photoId: ownProps.match.params.photoId,
    photoComments: photoComments
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleUser: (username) => dispatch(fetchSingleUser(username)),
    fetchShowPhoto: (photoId) => dispatch(fetchShowPhoto(photoId)),
    deletePhoto: (photo) => dispatch(deletePhoto(photo)),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (follow) => dispatch(deleteFollow(follow)),
    createComment: (comment) => dispatch(createComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo));
