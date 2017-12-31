import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    const processFormText = this.props.formType === 'signup' ? 'Sign Up' : 'Log In';

    let link;
    let altText;
    if (this.props.formType === 'signup') {
      link = <Link to='/#/login' />;
      altText = `Already have an account? ${link}`;
    } else {
      link = <Link to='/#/signup' />;
      altText = `Don't have an account? ${link}`;
    }

    return (
      <div className='session-form-contents'>
        <h2>{processFormText} to ISO</h2>

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
          <p>
            {altText}
          </p>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
