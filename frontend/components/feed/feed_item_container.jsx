import React from 'react';

const FeedItemContainer = (props) => {
  return (
    <div className="feed-item">
      <div className="feed-item-header">
        <p>{props.photo.author}</p>
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
