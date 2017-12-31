import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp, login } from '../../actions/session/session_actions';

const mapStateToProps = (state, ownProps) => {
  const formType = ownProps.location.pathname === '/signup' ? 'signup' : 'login';

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors,
    formType: formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname === '/signup' ? 'signup' : 'login';
  const action = formType === 'signup' ? signUp : login;

  return {
    processForm: (user) => dispatch(action(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
