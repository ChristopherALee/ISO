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

  showPhoto() {
    if (this.props.currentPhoto) {
      return (
        <img src={this.props.currentPhoto.medium_image_url}></img>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="photo-show-container">
        <div className="photo-show">
          <div className="photo">
            {this.showPhoto()}
          </div>
        </div>

        <div className="photo-contents">

        </div>
      </div>
    );
  }
}

export default Photo;
