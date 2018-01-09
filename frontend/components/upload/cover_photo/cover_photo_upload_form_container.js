import { connect } from 'react-redux';
import CoverPhotoUploadForm from './cover_photo_upload_form';
import { createPhoto } from '../../../actions/photos/photo_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPhoto: (photo) => dispatch(createPhoto(photo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoverPhotoUploadForm);
