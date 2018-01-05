import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  debugger
  // const userPhotos = state.photos.select(
  //   (photo) => {
  //     ownProps.location
  //   }
  // );
  // const user = ownProps.match.params.username;
  const user = state.users[ownProps.match.params.username];
  const photos = user.photoIds.map(id => state.photos[id]);
  const userPhotos = state.photos.select( (photo) => {
    photo.author_id
  });

  return {
    user: user,
    photos: photos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  null
)(Profile));
