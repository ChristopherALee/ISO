import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import UploadFormContainer from '../upload/upload_form_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleModal = this.handleModal.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout().then(
      () => this.props.history.push('/')
    );
  }

  handleModal(boolean = false) {
    // debugger
    this.setState({modalOpen: boolean});
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  mainNavLoggedIn() {
    return (
      <nav id='navbar-main-logged-in'>
        <div className='navbar-left'>
          <div id='logo'>
            <Link to='/feed'>ISO</Link>
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

          <div className='user-profile-options'>
            <i className="fa fa-lg fa-user navbar-right-logout" aria-hidden="true">
              <div className='dropdown-break'></div>
              <div className='user-profile-dropdown'>
                <ul>
                  <li>Profile</li>
                  <li onClick={this.handleLogOut}>Log Out</li>
                </ul>
              </div>
            </i>

          </div>

          <button className='navbar-upload' onClick={this.openModal}>
            <i className="fa fa-2x fa-cloud-upload" aria-hidden="true"></i>
            <p>Upload</p>
          </button>

          {/* Upload Modal */}
          <Modal
            className={{
              base: 'upload-modal',
              afterOpen: 'upload-modal-after-open',
              beforeClose: 'upload-modal-before-close'
            }}
            overlayClassName={{
              base: 'upload-modal-overlay',
              afterOpen: 'upload-modal-overlay_after-open',
              beforeClose: 'upload-modal-overlay_before-close'
            }}
            ariaHideApp={false}
            isOpen={this.state.modalOpen}
            shouldCloseOnOverlayClick={true}
            >

            <div className='close-modal'>
              <p className='close-modal-x' onClick={this.closeModal}>X</p>
            </div>

            {/* <div className='upload-form-container' onChange={this.readFile}> */}
              <UploadFormContainer closeModal={this.closeModal} />
            {/* </div> */}
          </Modal>
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
        <div className='navbar-alt-left'>
          <Link to='/'>ISO</Link>
        </div>

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

export default withRouter(NavBar);
