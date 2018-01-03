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
        <div>
          <div key={idx}
            className='photo-upload'
            style={{
              backgroundImage: `url(${photo.image_url})`
            }}>
          </div>
        </div>
      );
    });

    return (
      <div id='feed'>
        <div className='all-images'>
          {allPhotos}
        </div>
      </div>
    );
  }
}

export default Feed;
