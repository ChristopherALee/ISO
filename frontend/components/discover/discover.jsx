import React from 'react';
import { Link } from 'react-router-dom';

class Discover extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchAllPhotos();
  }

  allPhotos() {
    let photos;
    if (this.props.allPhotos) {
      photos = this.props.allPhotos.map( (photo, idx) => {
        return (
          <Link to={`/photos/${photo.id}`} key={idx}>
            <img src={photo.medium_image_url}></img>
          </Link>
        );
      });
    }

    return photos;
  }

  render() {
    return (
      <div className="discover-container">
        <div className="discover-banner">
          <p>Discover Inspiration</p>
        </div>

        <div className="discover-photo-header">
          <p>See recently added photos from photographers around the world</p>
        </div>

        <div className="discover-photos">
          {this.allPhotos()}
        </div>
      </div>
    );
  }
}

export default Discover;
