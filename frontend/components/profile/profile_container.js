import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import { fetchSingleUser } from '../../actions/user/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.username];

  let photos = [];
  if (user && user.photoIds) {
    photos = user.photoIds.map( (photoId) => state.entities.photos[photoId]);
    debugger
  }

  return {
    user: user,
    photos: photos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleUser: (user) => dispatch(fetchSingleUser(user))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile));
