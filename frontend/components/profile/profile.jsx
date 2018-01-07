import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchSingleUser(this.props.match.params.username);

    if (this.props.photos.length === 0) {
      this.props.fetchAllPhotos();
    }
  }

  componentWillReceiveProps(newProps) {
    debugger
    if (this.props.location.pathname !== newProps.location.pathname) {
      debugger
      this.props.fetchSingleUser(newProps.match.params.username);
    }
  }

  userPhotos() {
    let userPhotos;
    debugger
    if (this.props.photos.length && this.props.photos.every( (photo) => (photo !== undefined))) {
      debugger
      userPhotos = this.props.photos.map( (photo) => {
        return (
          <li key={photo.id}>
            <img src={`${photo.medium_image_url}`}></img>
          </li>
        );
      });
    } else {
      userPhotos = null;
    }
    debugger
    return userPhotos;
  }

  render() {
    let user;
    if (this.props.user) {
      user = this.props.user.username;
    } else {
      user = null;
    }

    debugger
    return (
      <div className='profile-container'>
        test
        <div className='cover-photo'></div>

        <div className='profile-information'>
          <p className='profile-username'>
            {user}
          </p>
          <ul className='profile-detail'></ul>
        </div>

        <div className='profile-photos'>
          <ul>
            {this.userPhotos()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;
