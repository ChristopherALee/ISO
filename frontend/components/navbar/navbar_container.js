import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import { logout } from '../../actions/session/session_actions';
import { fetchAllPhotos } from '../../actions/photos/photo_actions';

const mapStateToProps = (state, ownProps) => {
  const isAlt = ownProps.location.pathname !== '/' ? true : false;
  return {
    currentUser: Boolean(state.session.currentUser),
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
