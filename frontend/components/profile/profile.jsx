import React from 'react';
import Modal from 'react-modal';
import CoverPhotoUploadFormContainer from '../upload/cover_photo/cover_photo_upload_form_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnFollow = this.handleUnFollow.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  render() {
    let user;
    if (this.props.user) {
      user = this.props.user.username;
    } else {
      user = null;
    }

    return (
      <div className='profile-container'>
        <div className='cover-photo'>
          Cover Photo

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

            <CoverPhotoUploadFormContainer closeModal={this.closeModal} />
          </Modal>

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
