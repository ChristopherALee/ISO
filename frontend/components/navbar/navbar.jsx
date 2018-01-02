import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  mainNav() {
    return (
      <nav id='navbar-main'>
        <p>LOGO PLACEHOLDER</p>
        {/* <img src='../../../app/assets/images/navbar/gallery.png'></img> */}

        <div className='navbar-right'>
          <input
            type='search'
            placeholder='Search for photos, location, or people'
          />
          
            <Link to='/login'>Log In</Link>

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
        <p>LOGO PLACEHOLDER</p>
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
    // debugger
    if (this.props.isAlt.isAlt) {
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
