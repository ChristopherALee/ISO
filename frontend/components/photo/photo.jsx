import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchShowPhoto(this.props.photoId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.photoId !== newProps.match.params.photoId) {
      this.props.fetchShowPhoto(newProps.match.params.photoId);
    }
  }

  render() {
    if (this.props.currentPhoto) {
      return (
        <div className="photo-show-container">
          <div className="photo-show">
            <img src={this.props.currentPhoto.medium_image_url}></img>
          </div>

          <div className="photo-contents">
            <div className="photo-contents-user">
              <div className="photo">
                <div className="photo-contents-user-profile-photo">
                  <div
                    className="photo-contents-user-profile-photo-container"
                    style={{ backgroundImage: `url(${this.props.currentPhoto.authorProfilePhotoUrl})`}}
                    >
                  </div>
                </div>

                <div className="photo-contents-user-username">
                  <p>{this.props.currentPhoto.authorName}</p>
                </div>
              </div>
            </div>

            <div className="photo-contents-description">

            </div>

            <div className="photo-contents-comments">

            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Photo;
