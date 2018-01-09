import React from 'react';
import FeedItemContainer from './feed_item_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.location.pathname === '/feed') {
      debugger
      this.props.fetchSingleUser(this.props.sessionUser.username);
      this.props.fetchAllPhotos();
    }
  }

  render() {
    let that = this;

    debugger
    let allPhotos;
    if (this.props.photos.length && this.props.currentUser) {
      allPhotos = that.props.photos.filter((photo) => {
        return (
          that.props.currentUser.followingIds.includes(photo.author)
        );
      }).map( (photo, idx) => {
        debugger
        return (
          <div key={idx} className="feed-item-container">
            <FeedItemContainer photo={photo} />
          </div>
        );
      }).reverse();
    }

    debugger

    if (this.props.location.pathname === '/' || this.props.location.pathname === '/discover') {
      return (
        <div id='discover'>
          {allPhotos}
        </div>
      );
    } else {
      return (
        <div id="feed">
          {allPhotos}
        </div>
      );
    }
  }
}

export default Feed;
