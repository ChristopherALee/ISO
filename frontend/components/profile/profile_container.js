import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import { fetchSingleUser } from '../../actions/user/user_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.users[ownProps.match.params.username];
  // const photos = user.photoIds.map(id => state.photos[id]);

  return {
    user: user,
    // photos: photos
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
