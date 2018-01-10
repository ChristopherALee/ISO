import { connect } from 'react-redux';
import Discover from './discover';
import { fetchAllPhotos } from '../../actions/photos/photo_actions';

const mapStateToProps = state => {
  let allPhotos;
  if (state.entities.photos) {
    allPhotos = Object.values(state.entities.photos);
  }

  return {
    allPhotos: allPhotos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPhotos: () => dispatch(fetchAllPhotos())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
