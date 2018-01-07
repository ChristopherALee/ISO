import React from 'react';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.location.pathname === '/feed') {
      this.props.fetchAllPhotos();
    }
    // this.props.fetchAllUsers();
  }

  // componentWillReceiveProps(newProps) {
  //   debugger
  //   if (this.props.location.pathname !== newProps.location.pathname) {
  //     this.props.fetchAllPhotos();
  //   }
  // }

  render() {
    const allPhotos = this.props.photos.map( (photo, idx) => {
      return (
            <img key={idx} src={photo.medium_image_url}></img>
      );
    }).reverse();

    if (this.props.location.pathname === '/' || this.props.location.pathname === '/discover') {
      return (
        <div id='discover'>
          {allPhotos}
        </div>
      );
    } else {
      return (
        <div id='feed'>
          {allPhotos}
        </div>
      );
    }
  }
}

export default Feed;
