import { connect } from 'react-redux';
import UploadForm from './upload_form';

const mapStateToProps = (state) => {
  debugger
  return {
    errors: state.errors.photo.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, null)(UploadForm);
