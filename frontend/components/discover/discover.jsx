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
        let authorName;
        if (photo.author && photo.author.length > 15) {
          authorName = photo.author.slice(0, 15) + "...";
        } else {
          authorName = photo.author;
        }

        return (
          <div className="discover-photo-overlay-container" key={idx}>
            <Link to={`/photos/${photo.id}`} key={idx}>
              <img src={photo.medium_image_url}></img>

              <div className="discover-photo-overlay">
                <div className="overlay-info">
                  <div className="overlay-info-profile-photo-container">
                    <div
                      className="overlay-info-profile-photo"
                      style={{ backgroundImage: `url(${photo.authorProfilePhoto})`}}
                      >
                      </div>
                  </div>
                  <Link to={`/${photo.author}`}>{authorName}</Link>
                </div>
              </div>
            </Link>
          </div>
        );
      }).reverse();
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
          <p>See recent photos from photographers around the world</p>
        </div>

        <div className="discover-photos">
          {this.allPhotos()}
        </div>
      </div>
    );
  }
}

export default Discover;
