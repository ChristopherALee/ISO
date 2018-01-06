import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';
import { fetchSingleUser } from '../../actions/user/user_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  const user = state.users[ownProps.match.params.username];
  // const photos = user.photoIds.map(id => state.photos[id]);
  // const userPhotos = state.photos.select( (photo) => {
  //   photo.author_id
  // });
  debugger
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
