import { connect } from 'react-redux';
import CoverPhotoUploadForm from './cover_photo_upload_form';
import { updateUser } from '../../../actions/user/user_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUser: (photo, username) => dispatch(updateUser(photo, username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoverPhotoUploadForm);
