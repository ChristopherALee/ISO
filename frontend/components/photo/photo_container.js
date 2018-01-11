import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Photo from './photo';
import { fetchShowPhoto } from '../../actions/photos/photo_actions';
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
  let sessionUser = state.session.currentUser.username;
  let currentUser = state.entities.users[sessionUser];

  return {
    currentPhoto: currentPhoto,
    currentUser: currentUser,
    photoId: ownProps.match.params.photoId,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleUser: (username) => dispatch(fetchSingleUser(username)),
    fetchShowPhoto: (photoId) => dispatch(fetchShowPhoto(photoId)),
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
