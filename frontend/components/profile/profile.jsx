import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);


    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnFollow = this.handleUnFollow.bind(this);
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
    // debugger
    this.props.createFollow({ followee_id: this.props.user.id });
  }

  handleUnFollow(e) {
    e.preventDefault();
    // debugger
    this.props.deleteFollow({ followee_id: this.props.user.id });
  }

  toggleEditFollowButton() {
    // debugger

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
        <button className='profile-edit-follow-button'>
          Edit Profile
        </button>
      );
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
        <div className='cover-photo'>
          Cover Photo
          {this.toggleEditFollowButton()}
        </div>

        <div className='profile-information'>
          <div className='profile-picture'>
          </div>
          <p className='profile-username'>
            {user}
          </p>
          <ul className='profile-detail'>
            <p>Followers: </p>
            <p>Following: </p>
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
