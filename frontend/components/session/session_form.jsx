import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      usernameValidInput: "valid",
      passwordValidInput: "valid"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteErrors = this.deleteErrors.bind(this);
  }

  componentDidMount() {
    return null;
  }

  componentWillUnmount() {
    this.setState({['validInput']: 'valid'});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    let that = this;
    this.props.processForm(user).fail(
      error => {
        debugger
        if (error.responseJSON.username) {
          this.setState({['usernameValidInput']: 'invalid'});
        } else {
          this.setState({['usernameValidInput']: 'valid'});
        }

        if (error.responseJSON.password) {
          this.setState({['passwordValidInput']: 'invalid'});
        } else {
          this.setState({['passwordValidInput']: 'valid'});
        }
        // that.setState({['validInput']: 'invalid'});
      }
    );
  }

  deleteErrors() {
    this.props.deleteAllErrors();
  }

  // renderErrors() {
  //   const errors = this.props.errors.map( (error, idx) => {
  //     return (
  //       <li key={`error-${idx}`}>
  //         {error}
  //       </li>
  //     );
  //   });
  //
  //   return (
  //     <ul>
  //       {errors}
  //     </ul>
  //   );
  // }

  renderUsernameErrors() {
    let usernameErrors;
    debugger
    if (this.props.errors instanceof Array) {
      return null;
    } else if (this.props.errors.username) {
      usernameErrors = this.props.errors.username.map( (error, idx) => {
        return (
          <li key={`${idx}`}>
            {error}
          </li>
        );
      });
    }

    return (
      <ul>
        {usernameErrors}
      </ul>
    );
  }

  renderPasswordErrors() {
    let passwordErrors;

    if (this.props.errors instanceof Array) {
      return null;
    } else if (this.props.errors.password) {
      passwordErrors = this.props.errors.password.map( (error, idx) => {
        return (
          <li key={`${idx}`}>
            {error}
          </li>
        );
      });
    }

    return (
      <ul>
        {passwordErrors}
      </ul>
    );
  }

  render() {
    const processFormText = this.props.formType === 'signup' ? 'Join' : 'Log In to';
    const altProcessFormText = this.props.formType === 'signup' ? 'Log In' : 'Sign Up';
    const buttonText = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';

    let link;
    let altText;
    if (this.props.formType === 'signup') {
      link = '/login';
      altText = 'Already have an account? ';
    } else {
      link = '/signup';
     altText = "Don't have an account? ";
    }

    return (
      <div className='session-form-contents'>
        <p>{processFormText} ISO</p>

        <div className='session-errors'>
          {/* {this.renderErrors()} */}
        </div>

        <form className='session-form' onSubmit={this.handleSubmit}>
          <div className='session-form-username'>
            <label>Username</label>
            <input
              type='text'
              value={this.state.username}
              onChange={this.handleChange('username')}
              className={this.state.usernameValidInput}
            />
            <div className='session-form-username-errors'>{this.renderUsernameErrors()}</div>
          </div>

          <div className='session-form-password'>
            <label>Password</label>
            <input
              type='password'
              value={this.state.password}
              onChange={this.handleChange('password')}
              className={this.state.passwordValidInput}
            />
            <div className='session-form-password-errors'>{this.renderPasswordErrors()}</div>
          </div>

          <input type='submit' value={buttonText}/>
        </form>

        <div className='alt-signup-login'>
          {altText}
          <Link
            to={link}
            className='alt-signup-login-link'
            onClick={this.deleteErrors}
            >
            {altProcessFormText}
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
