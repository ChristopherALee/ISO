import React from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';
import CommentFormContainer from './comments_form/comment_form_container';

class Photo extends React.Component {
  constructor(props) {
    super(props);

    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnFollow = this.handleUnFollow.bind(this);
    this.close = this.close.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.sessionUser);
    this.props.fetchShowPhoto(parseInt(this.props.photoId)).then(
      (photo) => {
        this.props.fetchSingleUser(photo.photo.authorName);
      }
    );
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.photoId !== newProps.match.params.photoId) {
      this.props.fetchShowPhoto(parseInt(newProps.match.params.photoId)).then(
        (photo) => this.props.fetchSingleUser(photo.photo.authorName)
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

  showComments() {
    if (this.props.photoComments) {
      return (
        <Comments
          currentUser={this.props.currentUser}
          sessionUser={this.props.sessionUser}
          photoComments={this.props.photoComments}
          deleteComment={this.props.deleteComment}
        />
      );
    } else {
      return null;
    }
  }

  close() {
    this.props.history.goBack();
  }

  deleteButton() {
    if (this.props.currentUser && this.props.currentUser.username === this.props.currentPhoto.authorName) {
      return (
        <button className="delete-photo-button" onClick={this.delete}>Remove Photo</button>
      );
    } else {
      return null;
    }
  }

  delete() {
    this.props.deletePhoto(this.props.currentPhoto).then(
      (photo) => this.props.history.push(`/${this.props.currentUser.username}`)
    );
  }

  toggleAuthorName() {
    if (this.props.currentPhoto.authorName && this.props.currentPhoto.authorName.length > 15) {
      return (
        this.props.currentPhoto.authorName.slice(0, 15) + "..."
      );
    } else {
      return (
        this.props.currentPhoto.authorName
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
                <div className="go-back-from-photo-show" onClick={this.close}>X</div>
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
                    <p>{this.toggleAuthorName()}</p>
                  </Link>
                  {this.toggleEditFollowButton()}
                  {this.deleteButton()}
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
              <CommentFormContainer
                currentPhoto={this.props.currentPhoto}
              />

              {this.showComments()}
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
