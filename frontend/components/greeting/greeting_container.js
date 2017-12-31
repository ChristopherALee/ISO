import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout } from '../../actions/session/session_actions';

const mapStateToProps = (state) => {
  let currentUser;
  if (state.session.currentUser) {
    currentUser = state.session.currentUser.username;
  } else {
    currentUser = null;
  }
  
  return {
    currentUser: currentUser
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
)(Greeting);
