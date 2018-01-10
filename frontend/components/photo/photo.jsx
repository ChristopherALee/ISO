import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props);
    debugger
    this.state = {
      photo: this.props.currentPhoto
    };
  }

  componentDidMount() {
    debugger
    this.props.fetchSingleUser(this.state.photo.authorName);
    this.props.fetchSinglePhoto(this.props.photoId);
  }

  componentWillReceiveProps(newProps) {
    debugger
    if (this.props.match.params.photoId !== newProps.match.params.photoId) {
      this.props.fetchSinglePhoto(this.state.photoId);
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
