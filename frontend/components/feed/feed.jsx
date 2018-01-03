import React from 'react';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPhotos();
  }

  render() {
    const allPhotos = this.props.photos.map( (photo, idx) => {
      return (
        <li key={idx}>
          <img src={photo.image_url}></img>
        </li>
      );
    });

    return (
      <div id='feed'>
        <ul className='all-images'>
          {allPhotos}
        </ul>
      </div>
    );
  }
}

export default Feed;
