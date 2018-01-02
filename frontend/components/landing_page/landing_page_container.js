import { connect } from 'react-redux';
import LandingPage from './landing_page';

const mapStateToProps = (state) => {
  return {
    currentUser: Boolean(state.session.currentUser),
  };
};

export default connect(
  mapStateToProps,
  null
)(LandingPage);
