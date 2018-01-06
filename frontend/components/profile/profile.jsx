import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    debugger
  }

  componentDidMount() {
    debugger
    this.props.fetchSingleUser(this.props.user.username);
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

        </div>
      </div>
    );
  }
}

export default Profile;
