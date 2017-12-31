import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.processForm(user);
  }

  renderErrors() {
    const errors = this.props.errors.map( (error, idx) => {
      return (
        <li key={`error-${idx}`}>
          {error}
        </li>
      );
    });

    return (
      <ul>
        {errors}
      </ul>
    );
  }

  render() {
    const processFormText = this.props.formType === 'signup' ? 'Join' : 'Log In to';
    const altProcessFormText = this.props.formType === 'signup' ? 'Log In' : 'Sign Up';

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
        <h2>{processFormText} ISO</h2>
        <div className='session-errors'>
          {this.renderErrors()}
        </div>

        <form className='session-form' onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type='text'
              value={this.state.username}
              onChange={this.handleChange('username')}
            />
          </label>

          <label>Password
            <input
              type='password'
              value={this.state.password}
              onChange={this.handleChange('password')}
            />
          </label>

          <input type='submit' value={processFormText}/>
        </form>

        <div className='alt-signup-login'>
          {altText}
          <Link to={link}>{altProcessFormText}</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
