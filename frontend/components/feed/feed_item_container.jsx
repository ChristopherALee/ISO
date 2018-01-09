import React from 'react';
import { Link } from 'react-router-dom';

const FeedItemContainer = (props) => {
  return (
    <div className="feed-item">
      <div className="feed-item-header">
        <Link to={`/${props.photo.author}`}>{props.photo.author}</Link>
      </div>

      <div className="feed-item-image">
        <img src={props.photo.medium_image_url}></img>
      </div>

      <div className="feed-item-description">
        <p>{props.photo.title}</p>
        <p>{props.photo.description}</p>
      </div>
    </div>
  );
};

export default FeedItemContainer;
