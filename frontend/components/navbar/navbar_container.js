import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import { logout } from '../../actions/session/session_actions';
import { fetchAllPhotos } from '../../actions/photos/photo_actions';
import { fetchSingleUser } from '../../actions/user/user_actions';

const mapStateToProps = (state, ownProps) => {
  const isAlt = ownProps.location.pathname !== '/' ? true : false;
  let currentUsername;
  if (state.session.currentUser) {
    currentUsername = state.session.currentUser.username;
  }

  let currentUserProfilePhoto;
  if (state.session.currentUser) {
    currentUserProfilePhoto = state.session.currentUser.profile_photo_url;
  }

  return {
    currentUser: Boolean(state.session.currentUser),
    currentUsername: currentUsername,
    isAlt: { isAlt },
    photoErrors: state.errors.photo,
    currentUserProfilePhoto: currentUserProfilePhoto
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    fetchSingleUser: (username) => dispatch(fetchSingleUser(username))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));
