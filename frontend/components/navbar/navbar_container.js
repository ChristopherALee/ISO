import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavBar from './navbar';
import { logout } from '../../actions/session/session_actions';

const mapStateToProps = (state, ownProps) => {
  const isAlt = ownProps.location.pathname !== '/' ? true : false;
  return {
    currentUser: Boolean(state.session.currentUser),
    isAlt: { isAlt }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
