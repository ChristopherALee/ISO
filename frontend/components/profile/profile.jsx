import React from 'react';
import Modal from 'react-modal';
import CoverPhotoUploadFormContainer from '../upload/cover_photo/cover_photo_upload_form_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      modalOpenCoverPhoto: false,
      modalOpenProfilePhoto: false
    };

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnFollow = this.handleUnFollow.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.openModalCoverPhoto = this.openModalCoverPhoto.bind(this);
    this.closeModalCoverPhoto = this.closeModalCoverPhoto.bind(this);

    this.openModalProfilePhoto = this.openModalProfilePhoto.bind(this);
    this.closeModalProfilePhoto = this.closeModalProfilePhoto.bind(this);

    this.closeAllModals = this.closeAllModals.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.username);

    // will fix later must not fetch all photos on viewing profile page everytime
    // if (this.props.photos.length === 0) {
      this.props.fetchAllPhotos();
    // }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.props.fetchSingleUser(newProps.match.params.username);
    }
  }

  userPhotos() {
    let userPhotos;
    if (this.props.photos.length && this.props.photos.every( (photo) => (photo !== undefined))) {
      userPhotos = this.props.photos.map( (photo) => {
        return (
          // <li key={photo.id}>
            <img key={photo.id} src={`${photo.medium_image_url}`}></img>
          // </li>
        );
      }).reverse();
    } else {
      userPhotos = null;
    }

    return userPhotos;
  }

  handleFollow(e) {
    e.preventDefault();
    this.props.createFollow({ followee_id: this.props.user.id });
  }

  handleUnFollow(e) {
    e.preventDefault();
    this.props.deleteFollow({ followee_id: this.props.user.id });
  }

  toggleEditFollowButton() {
    if (this.props.currentUserFollowed) {
      return (
        <button className='followed-button' onClick={this.handleUnFollow}>
          Followed
        </button>
      );
    } else if (this.props.currentUser && this.props.location.pathname.slice(1) !== this.props.currentUser.username) {
      return (
        <button className='profile-edit-follow-button' onClick={this.handleFollow}>
          Follow
        </button>
      );
    } else {
      return (
        <button className='profile-edit-follow-button' onClick={this.openModal}>
          Edit Profile
        </button>
      );
    }
  }

  getFollowers() {
    if (this.props.user) {
      return (
        this.props.user.followerIds.length
      );
    }
  }

  getFollowees() {
    if (this.props.user) {
      return (
        this.props.user.followingIds.length
      );
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value });
    };
  }

  closeAllModals() {
    this.setState({['modalOpen']: false});
    this.setState({['modalOpenCoverPhoto']: false});
    this.setState({['modalOpenProfilePhoto']: false});
  }

  handleModal(boolean = false) {
    // debugger
    this.setState({['modalOpen']: boolean});
  }

  openModal() {
    this.setState({['modalOpen']: true});
  }

  closeModal() {
    this.setState({['modalOpen']: false});
  }

  handleModalCoverPhoto(boolean = false) {
    // debugger
    this.setState({['modalOpenCoverPhoto']: boolean});
  }

  openModalCoverPhoto() {
    this.setState({['modalOpenCoverPhoto']: true});
  }

  closeModalCoverPhoto() {
    this.setState({['modalOpenCoverPhoto']: false});
  }

  handleModalProfilePhoto(boolean = false) {
    // debugger
    this.setState({['modalOpenProfilePhoto']: boolean});
  }

  openModalProfilePhoto() {
    this.setState({['modalOpenProfilePhoto']: true});
  }

  closeModalProfilePhoto() {
    this.setState({['modalOpenProfilePhoto']: false});
  }

  coverPhoto() {
    if (this.props.user) {
      return (
        <img src={this.props.user.cover_photo_url2}></img>
      );
    } else {
      return null;
    }
  }

  render() {
    let user;
    if (this.props.user) {
      user = this.props.user.username;
    } else {
      user = null;
    }

    return (
      <div className='profile-container'>
        <Modal
          className={{
            base: 'options-upload-modal',
            afterOpen: 'options-upload-modal-after-open',
            beforeClose: 'options-upload-modal-before-close'
          }}
          overlayClassName={{
            base: 'options-upload-modal-overlay',
            afterOpen: 'options-upload-modal-overlay_after-open',
            beforeClose: 'options-upload-modal-overlay_before-close'
          }}
          ariaHideApp={false}
          isOpen={this.state.modalOpen}
          shouldCloseOnOverlayClick={true}
          >

          <div className='close-modal'>
            <p className='close-modal-x' onClick={this.closeModal}>X</p>
          </div>

          <div className="options">
            <div className="choose-cover" onClick={this.openModalCoverPhoto}>
              Choose a Cover Photo
            </div>

            <div className="choose-profile" onClick={this.openModalProfilePhoto}>
              Choose a Profile Photo
            </div>
          </div>

          <Modal
            className={{
              base: 'cover-photo-upload-modal',
              afterOpen: 'cover-photo-upload-modal-after-open',
              beforeClose: 'cover-photo-upload-modal-before-close'
            }}
            overlayClassName={{
              base: 'cover-photo-upload-modal-overlay',
              afterOpen: 'cover-photo-upload-modal-overlay_after-open',
              beforeClose: 'cover-photo-upload-modal-overlay_before-close'
            }}
            ariaHideApp={false}
            isOpen={this.state.modalOpenCoverPhoto}
            shouldCloseOnOverlayClick={true}
            >

            <div className='close-modal'>
              <p className='close-modal-x' onClick={this.closeAllModals}>X</p>
            </div>

            <CoverPhotoUploadFormContainer closeModal={this.closeModalCoverPhoto} />
          </Modal>
        </Modal>

        <div className='cover-photo'>
          {this.coverPhoto()}
          {this.toggleEditFollowButton()}
        </div>

        <div className='profile-information'>
          <div className='profile-picture'>
          </div>
          <p className='profile-username'>
            {user}
          </p>
          <ul className='profile-detail'>
            <p>{this.getFollowers()} Followers</p>
            <p>{this.getFollowees()} Following</p>
          </ul>
        </div>

        <div className='profile-photos-container'>
          <div className='profile-photos'>
              {this.userPhotos()}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
