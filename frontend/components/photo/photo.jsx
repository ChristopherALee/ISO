import React from 'react';
import { Link } from 'react-router-dom';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnFollow = this.handleUnFollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchShowPhoto(parseInt(this.props.photoId)).then(
      (photo) => {
        this.props.fetchSingleUser(photo.authorName);
      }
    );
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.photoId !== newProps.match.params.photoId) {
      this.props.fetchShowPhoto(parseInt(newProps.match.params.photoId)).then(
        (photo) => this.props.fetchSingleUser(photo.authorName)
      );
    }
  }

  handleFollow(e) {
    e.preventDefault();
    this.props.createFollow({ followee_id: this.props.currentPhoto.author_id });
  }

  handleUnFollow(e) {
    e.preventDefault();
    this.props.deleteFollow({ followee_id: this.props.currentPhoto.author_id });
  }

  toggleEditFollowButton() {
    if (this.props.currentUser && this.props.currentUser.username === this.props.currentPhoto.authorName) {
      return (
        null
      );
    } else if (this.props.currentUser && this.props.currentUser.followingIds && this.props.currentUser.followingIds.includes(this.props.currentPhoto.authorName)) {
      return (
        <button className="unfollow-button" onClick={this.handleUnFollow}>
          Followed
        </button>
      );
    } else {
      return (
        <button className="follow-button" onClick={this.handleFollow}>
          Follow
        </button>
      );
    }
  }

  render() {
    if (this.props.currentPhoto) {
      return (
        <div className="photo-show-container">
          <div className="photo-show">
            <div
              style={{ backgroundImage: `url(${this.props.currentPhoto.image_url})`}}
              >

            </div>
          </div>

          <div className="photo-contents">
            <div className="photo-contents-user">
              <div className="photo">
                <div className="photo-contents-user-profile-photo">
                  <Link to={`/${this.props.currentPhoto.authorName}`}>
                  <div
                    className="photo-contents-user-profile-photo-container"
                    style={{ backgroundImage: `url(${this.props.currentPhoto.authorProfilePhoto})`}}
                    >
                    </div>
                  </Link>
                </div>

                <div className="photo-contents-user-username">
                  <Link to={`/${this.props.currentPhoto.authorName}`}>
                    <p>{this.props.currentPhoto.authorName}</p>
                  </Link>
                  {this.toggleEditFollowButton()}
                </div>
              </div>
            </div>

            <div className="photo-contents-description">
              <div className="photo-contents-description-title">
                <p>{this.props.currentPhoto.title}</p>
              </div>

              <div className="photo-contents-description-description">
                <p>{this.props.currentPhoto.description}</p>
              </div>
            </div>

            <div className="photo-contents-comments">

            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default Photo;
