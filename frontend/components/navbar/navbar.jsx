import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout().then(
      () => this.props.history.push('/')
    );
  }

  mainNavLoggedIn() {
    return (
      <nav id='navbar-main-logged-in'>
        <div className='navbar-left'>
          <div id='logo'>
            <p>ISO</p>
          </div>

          <div className='navbar-links'>
            <Link to='/discover'>Discover</Link>
          </div>
        </div>

        <div className='navbar-right'>
          <input
            type='search'
            placeholder='Search for photos, location, or people'
          />

          {/* <button onClick={this.handleLogOut} className='navbar-right-logout'>
            Log Out
          </button> */}

          <i className="fa fa-lg fa-user navbar-right-logout" aria-hidden="true" onClick={this.handleLogOut}></i>

          <button className='navbar-upload'>
            {/* <div className='upload-icon'>upload</div> */}
            <i className="fa fa-2x fa-cloud-upload" aria-hidden="true"></i>
            <p>Upload</p>
          </button>
        </div>
      </nav>
    );
  }

  mainNav() {
    return (
      <nav id='navbar-main'>
        {/* <img src='../../../app/assets/images/navbar/gallery.png'></img> */}
        <div className='navbar-left'>
          <div id='logo'>
            <p>ISO</p>
          </div>

          <div className='navbar-links-main'>
            <Link to='/discover'>Discover</Link>
          </div>
        </div>

        <div className='navbar-right'>

            <Link to='/login' className='navbar-login'>Log In</Link>

          <button className='navbar-signup'>
            <Link to='/signup'>Sign Up</Link>
          </button>
        </div>
      </nav>
    );
  }

  altNav() {
    return (
      <nav id='navbar-alt'>
        <Link to='/'>ISO</Link>
        {/* <img src='/assets/images/navbar/gallery'></img> */}

        <div className='navbar-alt-right'>
          <input
            type='search'
            placeholder='Search for photos, location, or people'
          />
          <button className='navbar-alt-signup'>
            <Link to='/signup'>Sign Up</Link>
          </button>
        </div>
      </nav>
    );
  }

  render() {
    let currentNavBar;

    if (this.props.currentUser) {
      currentNavBar = this.mainNavLoggedIn();
    } else if (this.props.isAlt.isAlt) {
      currentNavBar = this.altNav();
    } else {
      currentNavBar = this.mainNav();
    }

    return(
      currentNavBar
    );
  }
}

export default NavBar;
