import { connect } from 'react-redux';
import Feed from './feed';
import { fetchAllPhotos } from '../../actions/photos/photo_actions';

const mapStateToProps = (state) => {
  return {
    photos: Object.values(state.photos)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPhotos: () => dispatch(fetchAllPhotos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
