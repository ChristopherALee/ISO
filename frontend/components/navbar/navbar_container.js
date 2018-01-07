import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import { logout } from '../../actions/session/session_actions';
import { fetchAllPhotos } from '../../actions/photos/photo_actions';

const mapStateToProps = (state, ownProps) => {
  const isAlt = ownProps.location.pathname !== '/' ? true : false;
  let currentUsername;
  if (state.session.currentUser) {
    currentUsername = state.session.currentUser.username;
  }
  
  return {
    currentUser: Boolean(state.session.currentUser),
    currentUsername: currentUsername,
    isAlt: { isAlt },
    photoErrors: state.errors.photo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllPhotos: () => dispatch(fetchAllPhotos())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar));
