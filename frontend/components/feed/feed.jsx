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
          <div key={idx}
            className='photo-upload'
            style={{ backgroundImage: `url(${photo.image_url})`
            }} >
          </div>
      );
    });

    const firstPhotos = allPhotos.slice(0, 3);
    const lastPhotos = allPhotos.slice(3);

    return (
      <div id='feed'>
        <div className='all-images'>
          {/* <div className='all-images-1'>
            {firstPhotos}
          </div> */}
          {/* <div className='all-images-2'>
            {lastPhotos}
          </div> */}
          {allPhotos}
        </div>
      </div>
    );
  }
}

export default Feed;
