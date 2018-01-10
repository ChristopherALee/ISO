import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: this.props.currentPhoto
    };
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
    return (
      <div className="photo-show-container">
        <div className="photo-show">

        </div>

        <div className="photo-contents">

        </div>
      </div>
    );
  }
}

export default Photo;
