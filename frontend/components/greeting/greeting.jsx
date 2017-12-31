import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    // this.notLoggedIn = this.notLoggedIn.bind(this);
  }

  notLoggedIn() {
    return (
      <div className='not-logged-in'>
        <Link to='/login'>Log In</Link> or <Link to='/signup'>Sign Up</Link>
      </div>
    );
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div className='session-greeting'>
          <p>
            Hi, {this.props.currentUser}!
          </p>

          <button onClick={this.props.logout}>Log Out</button>
        </div>
      );
    } else {
      return (
        this.notLoggedIn()
      );
    }
  }
}

export default Greeting;
