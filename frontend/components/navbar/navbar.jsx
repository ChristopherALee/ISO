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
        <input
          type='search'
          placeholder='Search for photos, location, or people'
        />
      </nav>
    );
  }

  altNav() {
    return (
      <nav id='navbar-alt'>
        <p>LOGO PLACEHOLDER</p>
        {/* <img src='/assets/images/navbar/gallery'></img> */}
        <input
          type='search'
          placeholder='Search for photos, location, or people'
        />
        <button className='navbar-alt-signup'>
          <Link to='/signup'>Sign Up</Link>
        </button>
      </nav>
    );
  }

  render() {
    let currentNavBar;
    if (this.props.isAlt) {
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
