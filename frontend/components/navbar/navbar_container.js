import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => {
  const isAlt = ownProps.location.pathname !== '/' ? true : false;
  return {
    currentUser: Boolean(state.session.currentUser),
    isAlt: { isAlt }
  };
};

export default connect(
  mapStateToProps,
  null
)(NavBar);
