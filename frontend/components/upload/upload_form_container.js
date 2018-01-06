import { connect } from 'react-redux';
import UploadForm from './upload_form';
import { createPhoto } from '../../actions/photos/photo_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser.username
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPhoto: (photo) => dispatch(createPhoto(photo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);
