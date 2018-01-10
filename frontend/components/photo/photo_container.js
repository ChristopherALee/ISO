import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Photo from './photo';
import { fetchShowPhoto } from '../../actions/photos/photo_actions';
import { fetchSingleUser } from '../../actions/user/user_actions';

const mapStateToProps = (state, ownProps) => {
  let currentPhoto = state.entities.photos[ownProps.match.params.photoId];
  
  return {
    currentPhoto: currentPhoto,
    photoId: ownProps.match.params.photoId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleUser: (username) => dispatch(fetchSingleUser(username)),
    fetchShowPhoto: (photoId) => dispatch(fetchShowPhoto(photoId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo));
