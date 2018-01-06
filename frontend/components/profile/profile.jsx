import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = {
      user: this.props.user,
      photos: this.props.photos
    };
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.match.params.username);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.props.fetchSingleUser(newProps.match.params.username);
    }
  }

  userPhotos() {
    let userPhotos;
    debugger
    if (this.props.photos.length) {
      userPhotos = this.props.photos.map( (photo) => {
        debugger
        return (
          <li key={photo.id}>
            <img src={`${photo.medium_image_url}`}></img>
          </li>
        );
      });
    } else {
      userPhotos = null;
    }
  }

  render() {
    return (
      <div className='profile-container'>
        <div className='cover-photo'></div>

        <div className='profile-information'>
          <p className='profile-username'></p>
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
