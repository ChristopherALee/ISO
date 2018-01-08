import React from 'react';
import FeedItemContainer from './feed_item_container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.location.pathname === '/feed') {
      this.props.fetchAllPhotos();
    }
  }

  render() {
    debugger
    const allPhotos = this.props.photos.map( (photo, idx) => {
      return (
        <div key={idx} className="feed-item-container">
          <FeedItemContainer photo={photo} />
        </div>
      );
    }).reverse();

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
