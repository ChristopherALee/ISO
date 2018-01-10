import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Photo from './photo';
import { fetchShowPhoto } from '../../actions/photos/photo_actions';
import { fetchSingleUser } from '../../actions/user/user_actions';
import { createFollow, deleteFollow } from '../../actions/follows/follow_actions';

const mapStateToProps = (state, ownProps) => {
  let currentPhoto = state.entities.photos[ownProps.match.params.photoId];
  let currentUser = state.session.currentUser;
  // let currentUser = currentPhoto ? state.entities.users[currentPhoto.authorName] : null;
  debugger

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
    deleteFollow: (follow) => dispatch(deleteFollow(follow))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo));
