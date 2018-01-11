import React from 'react';
import { Link } from 'react-router-dom';

const FeedItemContainer = (props) => {
  return (
    <div className="feed-item">
      <div className="feed-item-header">
        <div className="feed-item-header-profile-photo">
          <div
            className="feed-item-header-profile-photo-image"
            style={{ backgroundImage: `url(${props.photo.authorProfilePhoto})`}}
            >
          </div>
          {/* <img src={`${props.photo.authorProfilePhoto}`}></img> */}
        </div>
        <Link to={`/${props.photo.author}`}>{props.photo.author}</Link>
      </div>

      <div className="feed-item-image">
        <Link to={`/photos/${props.photo.id}`}>
          <img src={props.photo.medium_image_url}></img>
        </Link>
      </div>

      <div className="feed-item-description">
        <p>{props.photo.title}</p>
        <p>{props.photo.description}</p>
      </div>
    </div>
  );
};

export default FeedItemContainer;
