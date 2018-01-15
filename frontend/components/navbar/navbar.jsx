import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import UploadFormContainer from '../upload/upload_form_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleProfileLink = this.handleProfileLink.bind(this);
    this.handleModal = this.handleModal.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    if (this.props.location.pathname === '/') {
      this.props.fetchAllPhotos();
      this.props.fetchSingleUser(this.props.currentUsername);
    } else if (this.props.location.pathname.includes("/photos") && this.props.location.pathname.includes("/discover")) {
      this.props.fetchSingleUser(this.props.currentUsername);
    }
  }

  componentDidMount() {
    if (this.props.location.pathname.includes("/discover")) {
      this.props.fetchSingleUser(this.props.currentUsername);
    }
  }

  handleLogOut(e) {
    e.preventDefault();
    this.props.logout().then(
      () => this.props.history.push('/')
    );
  }

  handleProfileLink(e) {
    e.preventDefault();
    this.props.history.push(`/${this.props.currentUsername}`);
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
            <Link to='/feed'>
              <div className='logo-logged-in'>logo-logged</div>
            </Link>
          </div>

          <div className='navbar-links'>
            <Link to='/discover'>Discover</Link>
            {/* <Link to='/about'>About</Link> */}
          </div>
        </div>

        <div className='navbar-right'>
          {/* <input
            type='search'
            placeholder='Search for photos, location, or people'
          /> */}

          <div className='user-profile-options'>
            <div className='navbar-profile-photo-container'>
              <div className="navbar-profile-photo-image">
                <div
                  style={{ backgroundImage: `url(${this.props.currentUserProfilePhoto})`}}>
                </div>
              </div>

            </div>
            <div className='user-profile-dropdown'>
              <ul>
                <li>{this.props.currentUsername}</li>
                <li onClick={this.handleProfileLink}>Profile</li>
                <li onClick={this.handleLogOut}>Log Out</li>
              </ul>
            </div>

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
            onRequestClose={() => {
              this.setState({ modalOpen: false });
            }}
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
            <Link to='/'>
              <div className='logo-main'>logo</div>
            </Link>
          </div>

          <div className='navbar-links-main'>
            <Link to='/discover'>Discover</Link>
            {/* <Link to='/about'>About</Link> */}
          </div>
        </div>

        <div className='navbar-right'>
          <div className="github-link">
            <a href="https://www.linkedin.com/in/christopheradamlee/">
              <i class="fa fa-2x fa-linkedin-square" aria-hidden="true"></i>
            </a>

            <a href="https://github.com/ChristopherALee">
              <i className="fa fa-2x fa-github" aria-hidden="true"></i>
            </a>
          </div>

          <div className="login-signup-buttons">
            <Link to='/login' className='navbar-login'>Log In</Link>
            <Link to='/signup' className='navbar-signup'>Sign Up</Link>
          </div>
        </div>
      </nav>
    );
  }

  altNav() {
    return (
      <nav id='navbar-alt'>
        <div className='navbar-alt-left'>
          <div id='logo'>
            <Link to='/'>
              <div className='logo-alt'>logo-alt</div>
            </Link>
          </div>

          <div className='navbar-links-alt'>
            <Link to='/discover'>Discover</Link>
            {/* <Link to='/about'>About</Link> */}
          </div>
        </div>

        <div className='navbar-alt-right'>
          {/* <input
            type='search'
            placeholder='Search for photos, location, or people'
          /> */}
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
