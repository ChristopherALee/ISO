import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Feed from './feed';
import { fetchAllPhotos } from '../../actions/photos/photo_actions';
import { fetchAllUsers, fetchSingleUser } from '../../actions/user/user_actions';

const mapStateToProps = (state) => {
  let sessionUser = state.session.currentUser ? state.session.currentUser : null;

  let currentUser;
  // INVESTIGATE backend information may not be enough
  if (Object.values(state.entities.users).length >= 1) {
    let firstKey = Object.keys(state.entities.users)[0];
    currentUser = state.entities.users[firstKey];
  }

  return {
    sessionUser: sessionUser,
    currentUser: currentUser,
    allUsers: state.entities.users,
    photos: Object.values(state.entities.photos)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    fetchSingleUser: (user) => dispatch(fetchSingleUser(user))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed));
