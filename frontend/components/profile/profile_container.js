import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import { fetchSingleUser } from '../../actions/user/user_actions';
import { fetchAllPhotos } from '../../actions/photos/photo_actions';
import { createFollow, deleteFollow } from '../../actions/follows/follow_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.username];

  let photos = [];
  if (user && user.photoIds) {
    photos = user.photoIds.map( (photoId) => state.entities.photos[photoId]);
  }

  let currentUserFollowed = user ? user.currentUserFollowed : null;

  return {
    currentUser: state.session.currentUser,
    currentUserFollowed: currentUserFollowed,
    user: user,
    photos: photos,
    uploadLoading: state.loading.uploadLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleUser: (user) => dispatch(fetchSingleUser(user)),
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    createFollow: (follow) => dispatch(createFollow(follow)),
    deleteFollow: (follow) => dispatch(deleteFollow(follow))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
